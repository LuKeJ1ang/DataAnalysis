import React from 'react';

export default class Exec_body extends  React.PureComponent{
    render(){
        return(
            <div class="layui-tab" lay-filter="demo" lay-allowclose="true">
                <div class="layui-tab-content">
                    <div class="layui-form">
                        <form action="/superset/ColumnInfo" method="post" enctype=multipart/form-data id="columnForm" >
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}