import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { format, parseISO } from 'date-fns';
import en from 'date-fns/locale/pt';

import Loading from '~/components/Loading';
import { getPullsRequest } from '~/store/modules/repository/actions';

import {
  Container,
  RepositoryContainer,
  RepositoryInfo,
  Author,
  Avatar,
} from './styles';

export default function PullRequests() {
  const { name, login } = useParams();
  const dispatch = useDispatch();
  const pullData = useSelector(state => state.repository.pullrequests);
  const loading = useSelector(state => state.repository.loading);

  const pullrequests = pullData.map(pullrequest => ({
    ...pullrequest,
    created_at: format(parseISO(pullrequest.created_at), " MMM, do  '/' yyyy", {
      locale: en,
    }),
  }));

  useEffect(() => {
    dispatch(getPullsRequest({ name, login }));
  }, []); //eslint-disable-line

  return (
    <>
      {loading ? (
        <Loading data-testid="loading" />
      ) : (
        <Container data-testid="pull-list">
          {pullrequests.length === 0 ? (
            <h1>No data found</h1>
          ) : (
            pullrequests.map(
              ({
                id,
                title,
                html_url: url,
                created_at: data,
                body,
                user: { login: creator, avatar_url: avatar },
              }) => (
                <RepositoryContainer
                  key={id}
                  href={url}
                  target="_blank"
                  data-cy="container"
                >
                  <RepositoryInfo>
                    <span>
                      <h2>{title}</h2>
                      <p>{body}</p>
                    </span>
                  </RepositoryInfo>
                  <Author>
                    <Avatar src={avatar} />
                    <div>
                      <strong>{creator}</strong>
                      <small>{data}</small>
                    </div>
                  </Author>
                </RepositoryContainer>
              )
            )
          )}
        </Container>
      )}
    </>
  );
}
