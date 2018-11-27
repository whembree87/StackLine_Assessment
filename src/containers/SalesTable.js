import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const WEEK_ENDING = 'WEEK ENDING';
const RETAIL_SALES = 'RETAIL SALES';
const WHOLESALE_SALES = 'WHOLESALE SALES';
const UNITS_SOLD = 'UNITS SOLD';
const RETAILER_MARGIN = 'RETAILER MARGIN';

class SalesTable extends Component {
    // ToDo : Finish -- Use lodash to sort and then call renderTable()
    sortAscending(e) {
        console.log('sort ascending', e.target);
    }

    // ToDo : Finish -- Use lodash to sort and then call renderTable()
    sortDescending(e) {
        console.log('sort descending', e.target);
    }

    renderTable() {
        const { productData } = this.props;
        const sales = _.map(productData, 'sales');

        return _.map(_.flatten(sales), sale => {
            return (
                <tr>
                    <td>{sale.weekEnding}</td>
                    <td>{sale.retailSales}</td>
                    <td>{sale.wholesaleSales}</td>
                    <td>{sale.unitsSold}</td>
                    <td>{sale.retailerMargin}</td>
                </tr>
            )}
        );
    }

    render() {
        return (
            <div className="col-md-9" id="sales_table">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">{WEEK_ENDING}
                            <a onClick={this.sortAscending} id="weekAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="weekDesc" id="week" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                        <th scope="col">{RETAIL_SALES}
                            <a onClick={this.sortAscending} id="retailSalesAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="retailSalesDesc" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                        <th scope="col">{WHOLESALE_SALES}
                            <a onClick={this.sortAscending} id="wholesaleSalesAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="wholesaleSalesDesc" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                        <th scope="col">{UNITS_SOLD}
                            <a onClick={this.sortAscending} id="unitsSoldAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="unitsSoldDesc" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                        <th scope="col">{RETAILER_MARGIN}
                            <a onClick={this.sortAscending} className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>{this.renderTable()}</tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productData : state.productData
    };
}

export default connect(mapStateToProps)(SalesTable);