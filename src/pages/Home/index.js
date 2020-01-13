/* eslint-disable camelcase */
import React, { useEffect, useState, useCallback } from 'react';
import { IoMdStar, IoMdGitBranch } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '~/components/Loading';
import {
  getRepositoryRequest,
  getMoreData,
} from '~/store/modules/repository/actions';

import {
  Container,
  RepositoryContainer,
  RepositoryInfo,
  IconContainer,
  Author,
  Avatar,
} from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const repositories = useSelector(state => state.repository.repositories);
  const loading = useSelector(state => state.repository.loading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getRepositoryRequest());
  }, []); //eslint-disable-line

  useCallback(
    ((window.onscroll = () => {
      const d = document.documentElement;
      const offset = d.scrollTop + window.innerHeight;

      if (offset >= 6650) {
        dispatch(getMoreData({ page }));
        setPage(page + 1);
      }
    }),
    [])
  );
  return (
    <>
      {loading ? (
        <Loading data-testid="loading" />
      ) : (
        <Container data-testid="repository-list">
          {repositories.map(
            ({
              id,
              name,
              description,
              full_name: fullName,
              forks_count: forks,
              stargazers_count: starts,
              owner: { avatar_url: avatar, login },
            }) => (
              <RepositoryContainer
                key={id}
                to={`/pullrequests/${name}/${login}`}
              >
                <RepositoryInfo>
                  <span>
                    <h2>{name}</h2>
                    <p>{description}</p>
                  </span>
                  <IconContainer>
                    <IoMdGitBranch />
                    <small>{forks}</small>
                    <IoMdStar />
                    <small>{starts}</small>
                  </IconContainer>
                </RepositoryInfo>
                <Author>
                  <Avatar src={avatar} />
                  <strong>{name}</strong>
                  <small>{fullName}</small>
                </Author>
              </RepositoryContainer>
            )
          )}
        </Container>
      )}
    </>
  );
}
