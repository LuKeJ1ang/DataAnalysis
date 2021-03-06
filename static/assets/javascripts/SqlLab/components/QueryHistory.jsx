import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import QueryTable from './QueryTable';

const propTypes = {
  queries: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const QueryHistory = (props) => {
  if (props.queries.length > 0) {
    return (
      <QueryTable
        columns={[
          'state', 'started', 'duration', 'progress',
          'rows', 'sql', 'output', 'actions',
        ]}
        queries={props.queries}
        actions={props.actions}
      />
    );
  }
  return (
    <Alert bsStyle="info">
      没有查询历史...
    </Alert>
  );
};
QueryHistory.propTypes = propTypes;

export default QueryHistory;
