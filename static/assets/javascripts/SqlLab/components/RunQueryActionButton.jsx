import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

const propTypes = {
  allowAsync: PropTypes.bool.isRequired,
  dbId: PropTypes.number,
  queryState: PropTypes.string.isRequired,
  runQuery: PropTypes.func.isRequired,
  selectedText: PropTypes.string,
  stopQuery: PropTypes.func.isRequired,
};
const defaultProps = {
  allowAsync: false,
};

export default function RunQueryActionButton(props) {
  const runBtnText = props.selectedText ? '运行SELECR语句' : '运行查询';
  const btnStyle = props.selectedText ? 'warning' : 'primary';
  const shouldShowStopBtn = ['running', 'pending'].indexOf(props.queryState) > -1;
  const tooltip = '快捷方式：[ Alt + Enter ]';

  const commonBtnProps = {
    bsSize: 'small',
    bsStyle: btnStyle,
    disabled: !(props.dbId),
  };

  const syncBtn = (
    <Button
      {...commonBtnProps}
      onClick={() => props.runQuery(false)}
      key="run-btn"
      tooltip={tooltip}
    >
      <i className="fa fa-refresh" /> {runBtnText}
    </Button>
  );

  const asyncBtn = (
    <Button
      {...commonBtnProps}
      onClick={() => props.runQuery(true)}
      key="run-async-btn"
      tooltip={tooltip}
    >
      <i className="fa fa-table" /> {runBtnText}
    </Button>
  );

  const stopBtn = (
    <Button
      {...commonBtnProps}
      onClick={props.stopQuery}
    >
      <i className="fa fa-stop" /> Stop
    </Button>
  );

  let button;
  if (shouldShowStopBtn) {
    button = stopBtn;
  } else if (props.allowAsync) {
    button = asyncBtn;
  } else {
    button = syncBtn;
  }

  return (
    <div className="inline m-r-5 pull-left">
      {button}
    </div>
  );
}

RunQueryActionButton.propTypes = propTypes;
RunQueryActionButton.defaultProps = defaultProps;
