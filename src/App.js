import React, { Component } from "react";
import Header from "./components/Header.js";
import projects from "./projects.json";
import ProjectBox from "./components/projectBox.js";
import Footer from "./components/Footer.js";

class App extends Component {

    state = {
        projects
    };


    render() {
        return (

            <div>
                <Header />



                <section id="work">
                    <h1>Case Studies</h1>
                    <div className="cardContainer">
    
                        {this.state.projects.map(work => (
                            <ProjectBox
                            id={work.id}
                            name={work.name}
                            image={work.image}
                            description={work.description}
                            tech={work.tech}/>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default App;