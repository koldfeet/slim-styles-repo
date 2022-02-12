import React, { Component } from 'react'
import Header from '../components/home-header/Index'
import Section from '../components/about-section/Index'
import ProductCard from "../components/ProductCard"
import Title from "../components/Title"
import Wrapper from "../components/Wrapper"
import Products from "../products.json"
import Form from "../components/home-form/Index"
import Footer from "../components/home-footer/Index"
import List from "../components/List"

const blog = [
    {
        id: 1,
        question: "What do you think are the biggest misconceptions that Black people?",
        answer: "People of all races need to evaluate their hair and learn what products work best. For example, a volumizing shampoo is something that is not commonly used in the Black community. However, if you have oily hair that needs to be shampooed twice a week because your hair loses style and falls flat, a volumizing shampoo could do the trick."
    },
    {
        id: 2,
        question: "Can you explain the difference between the various porosities when it comes to haircare?",
        answer: "Porosity, as it relates to hair, refers to how well your hair is able to absorb and hold moisture. There are three categories: low, normal, and high."
    },
    {
        id: 3,
        question: "Although perms seem to be a thing of the past, there are still Black women who prefer this to natural hair. Can you let us in on what you should expect when going in for an appointment and how to maintain your hair's health after the treatment?",
        answer: "$30"
    },
    {
        id: 4,
        question: "Colors",
        answer: "&333333.3"
    },
    {
        id: 5,
        question: "hair growth",
        answer: "30"
    },
    {
        id: 6,
        question: "Dies",
        answer: "$60"
    }
]




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
                <List blog={blog} />
                <Footer />
            </div>
        )
    }
}

// export default Home //double check