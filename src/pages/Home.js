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
        question: "How would you say the industry has evolved in the past 10 years when it comes to natural hair? Do you think Hollywood and the fashion industry have become more accepting of it?",
        answer: "Over the past 10 years, relaxers have been deprioritized in the Black community. Other presumed less-harmful chemicals began to take their place, such as the keratin treatments. It was not until we learned about formaldehyde that clients and stylists began to back off from the keratin treatments. That signaled the start of the chemical-free craze. Everybody wanted to be natural but still get their hair straightened. The problem was that most people’s hair would not last through humidity or exercising. When they had to shampoo it naturally, they did not know what to do in terms of styling. Their hair had uneven textures and was just difficult to manage. From there began the big chop phase, removing all compromised ends that were not natural in texture."
    },
    {
        id: 2,
        question: "Can you explain the difference between the various porosities when it comes to haircare?",
        answer: "Porosity, as it relates to hair, refers to how well your hair is able to absorb and hold moisture. There are three categories: low, normal, and high."
    },
    {
        id: 3,
        question: "Most people outside of the Black community have little to no education about Black hair. What do you think is one of the biggest misconceptions and implicit biases held by wider society?",
        answer: "Honestly, I think most people have little to no education about hair outside of their own community. The bigger issue is that people do not understand curly hair and just how fragile some textures are within the curl community, regardless of race. Generally speaking, curly hair is the driest of any hair texture and needs constant love and nourishment. Curly hair thrives with natural oils and does not have to be shampooed and manipulated daily. Consequently, when styling curly hair, especially tighter textures, the styles should be preserved for longer than a day.  "
    },
    {
        id: 4,
        question: "What do you think are the biggest misconceptions that Black people themselves have about their own hair?",
        answer: "People of all races need to evaluate their hair and learn what products work best. For example, a volumizing shampoo is something that is not commonly used in the Black community. However, if you have oily hair that needs to be shampooed twice a week because your hair loses style and falls flat, a volumizing shampoo could do the trick. People with curly hair often choose a smoothing shampoo or a hydrating shampoo, which could actually make some curly textures flat and lifeless. "
    },
    {
        id: 5,
        question: "Although perms seem to be a thing of the past, there are still Black women who prefer this to natural hair. Can you let us in on what you should expect when going in for an appointment and how to maintain your hair's health after the treatment?",
        answer: "Getting a chemical relaxer in 2020 is just like eating at a fast-food chain that has been around for years. Most people choose not to do it, and if they go back to it, their body does not respond well. They do not make relaxers like they used to. Companies have chosen cheaper ingredients that are often more harmful. "
    },
    {
        id: 6,
        question: "How would you define what a protective style is?",
        answer: "A protective style is anything that wraps your hair and seals your ends and can be kept for at least two weeks. One of the best things to do before getting a protective style is to get a haircut, removing all or most of your split ends. This way, when you remove the protective style, your hair has length and fullness from roots to ends."
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