import React, { Component } from 'react'
import Header from '../components/home-header/Index'
import Section from '../components/about-section/Index'
import ProductCard from "../components/ProductCard"
import Title from "../components/Title"
import Wrapper from "../components/Wrapper"
import Products from "../products.json"
import Form from "../components/home-form/Index"
import Footer from "../components/home-footer/Index"




// class Home extends Component 
export default class Home extends Component {

    state = {
        Products //double check this
    }

    removeFriend = id => {
        const products = this.state.products.filter(product => product.id !== id)
        this.setState({ products });
    }

    render() {
        return (
            <div>
                <Header />
                <Section />
                <Form />
                <Wrapper>
                    {/* <h1 id='services' className='about-section-h2'>Services</h1> */}
                    <Title />
                    {this.state.Products.map(Product => (
                        <ProductCard
                            removeFriend={this.removeFriend}
                            id={Product.id}
                            key={Product.id} //double check this
                            name={Product.name}
                            image={Product.image}
                            price={Product.price}
                            rating={Product.rating}
                        />
                    ))}
                </Wrapper>
                <Footer />
            </div>
        )
    }
}

// export default Home //double check