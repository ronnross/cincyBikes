import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>CincyBikes</p>
    <ul>
      <li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Latest
        </a>
      </li>
      <li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Events
        </a>
      </li>
      <li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support Us
        </a>
      </li>
      <li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter" />
        </a>
      </li>
    </ul>
  </header>
);

const CardBlock = ({ title, data }) => (
  <section>
    {title}
    [Show All]
    {data.map(item => (
      <Card title={item} />
    ))}
  </section>
);

const CardImageBlock = ({ title, data }) => (
  <section>
    {title}
    [Show All]
    {data.map(item => (
      <Card title={item.title} />
    ))}
  </section>
);

const Card = ({ title }) => (
  <article>
    <img src={logo} alt="event" />
    <h2>{title} </h2>
    <time datetime="2018-07-07">July 7</time>
    <a href="/event">View more >></a>
  </article>
);

class App extends Component {
  state = {
    news: [
      {
        image: "http://placekitten.com/g/200/300",
        title: "this is a test title",
        date: "July 7"
      }
    ],
    events: ["stuff", "more stuff", "hi"],
    groups: ["stuff", "more stuff", "hi"]
  };

  render() {
    return (
      <div className="App">
        <Header />
        <CardImageBlock title="the Latest" data={this.state.news} />
        <CardBlock title="Events" data={this.state.events} />
        <CardBlock title="Groups" data={this.state.groups} />
      </div>
    );
  }
}

export default App;
