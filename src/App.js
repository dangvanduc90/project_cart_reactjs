import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import CartItem from "./components/CartItem";
import CartResult from "./components/CartResult";


class App extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <Header/>
                <main id="mainContainer">
                    <div className="container">
                        {/* Products */}
                        <section className="section">
                            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                            <div className="row">
                                {/* Product */}
                                <Products/>
                                <Products/>
                                <Products/>
                            </div>
                        </section>
                        {/* Message */}
                        <h3>
                            <span className="badge amber darken-2">Mua Hàng Thành Công !</span>
                        </h3>
                        {/* Cart */}
                        <section className="section">
                            <div className="table-responsive">
                                <table className="table product-table">
                                    <thead>
                                        <tr>
                                            <th/>
                                            <th>Sản Phẩm</th>
                                            <th>Giá</th>
                                            <th>Số Lượng</th>
                                            <th>Tổng Cộng</th>
                                            <th/>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CartItem/>
                                        <CartItem/>
                                        <CartResult/>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </main>
                {/* Footer */}
                <Footer/>
        </div>
        );
    }
}

export default App;
