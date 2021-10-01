import React, { useEffect } from 'react';
import { getHouses } from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import Houses from './Houses'

export default function Announcements() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch])
    return (
      <div>
        <Houses/>
          </div>
    )
}