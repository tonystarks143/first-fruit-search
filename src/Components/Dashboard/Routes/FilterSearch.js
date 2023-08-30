import React, { Component } from "react";
import FilterableProductTable from "../FilterableProductTable";
const PRODUCTS = [
    // Fruits
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    // Vegetables
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    // Nuts
    { category: "Nuts", price: "$2.0", stocked: false, name: "Cashew" },
    { category: "Nuts", price: "$4.2", stocked: false, name: "Badam" },
    { category: "Nuts", price: "$1.2", stocked: true, name: "Dry Grapes" },
];
export default class FilterSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLazyComponent: false,
        };
    }
    componentDidMount(){
        document.title='Filter Search'
    }
    render() {
        return (
            <>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="well">
                            {/* Table */}
                            <FilterableProductTable products={PRODUCTS} />
                        </div>
                    </div>

                </div>
            </>
        )
    }
}