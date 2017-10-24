import React from 'react';

export default class Exec_tabName React.PureComponent{
    render{
        return(
            <div class="div_tab">
                <span class="span_tab">
                    数据库表名：<input name="tab_name"  type="text" maxlength="12" value="TableName">
                </span>
            </div>
        );
    }
}