import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TableLoader from './TableLoader';

const propTypes = {
  user: PropTypes.object.isRequired,
};

class CreatedContent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dashboardsLoading: true,
      slicesLoading: true,
      dashboards: [],
      slices: [],
    };
  }
  renderSliceTable() {
    const mutator = data => data.map(slice => ({
      slice: <a href={slice.url}>{slice.title}</a>,
      favorited: moment.utc(slice.dttm).fromNow(),
      _favorited: slice.dttm,
    }));
    return (
      <TableLoader
        dataEndpoint={`/superset/created_slices/${this.props.user.userId}/`}
        className="table table-condensed"
        columns={['slice', 'favorited']}
        mutator={mutator}
        noDataText="无图表"
        sortable
      />
    );
  }
  renderDashboardTable() {
    const mutator = data => data.map(dash => ({
      dashboard: <a href={dash.url}>{dash.title}</a>,
      favorited: moment.utc(dash.dttm).fromNow(),
      _favorited: dash.dttm,
    }));
    return (
      <TableLoader
        className="table table-condensed"
        mutator={mutator}
        dataEndpoint={`/superset/created_dashboards/${this.props.user.userId}/`}
        noDataText="无仪表盘"
        columns={['dashboard', 'favorited']}
        sortable
      />
    );
  }
  render() {
    return (
      <div>
        <h3>仪表板</h3>
        {this.renderDashboardTable()}
        <hr />
        <h3>图表</h3>
        {this.renderSliceTable()}
      </div>
    );
  }
}
CreatedContent.propTypes = propTypes;

export default CreatedContent;
