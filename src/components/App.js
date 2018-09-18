import React from 'react';
import { Component } from 'react';
import { TODOItem } from './TODOItem';
import { NewItemModal } from './NewItemModal';
import quotes from '../data/quotes.json';

export class App extends Component {
    constructor(props) {
        super(props);
        this.ranodmQuote = quotes[Math.floor(Math.random() * quotes.length)];
        this.state = {
          modalActive : false
        };
        this.items = [
            {
                id: 0,
                name: 'Pick up drycleaning'
            },
            {
                id: 1,
                name: 'Study for exam'
            },
            {
                id: 2,
                name: 'Drink beer'
            }
        ];
        this.removeItem = this.removeItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    removeItem(itemsId) {
        setTimeout(() => {
            for (let i in this.items) {
                if (this.items[i].id === itemsId) {
                    this.items.splice(i, 1);
                    break;
                }
            }
            console.log(this.items);
            this.forceUpdate()
        }, 1000)
    }

    toggleModal() {
      this.setState({
        modalActive: !this.state.modalActive
      });
    }
    addItem(item) {
      item.id = this.generateId();
      this.items.push(item);
      this.forceUpdate()
    }

    generateId() {
      let biggestId = this.items.length === 0 ? 0 : this.items[0].id;
      for (let item of this.items)
        if (item.id > biggestId)
          biggestId = item.id;
      return ++biggestId;
    }

    render() {
        return (
            <div className="page-wrap">
              {/* header */}
              <header className="header">
                <div className="wrap">
                  <span className="btn-icon">
                    <img onClick={this.toggleModal} className="icon icon-plus js-modal-init" src="icons/icon-plus.svg" alt="Add New Item" />
                  </span>
                  <div className="header-blockquote">
                    <h1 className="header-quote">{ this.ranodmQuote.quote }</h1>
                    <div className="header-cite">- { this.ranodmQuote.author }</div>
                  </div>
                </div>
                <div className="header-inner">
                  <div className="wrap">
                    <img className="logo" src="images/vegait-logo.svg" alt="VegaIT" />
                    <div className="date-wrap">
                      <img className="icon" src="icons/icon-calendar.svg" alt="Calendar" />
                      <time> {new Date().toLocaleDateString()}</time>
                    </div>
                  </div>
                </div>
              </header>
              <main className="main">
                <div className="wrap">
                {this.items.map((item) =>
                <TODOItem key={item.id}
                            checked = {this.removeItem}
						                {...item}/>	)}
                </div>
              </main>
              <NewItemModal active = {this.state.modalActive}
                            closeModal = {this.toggleModal}
                            addItem = {this.addItem}/>
              {/* footer */}
              <footer className="footer">
                <div className="wrap">
                  <span className="copy">© 2018 Vega IT Sourcing</span>
                </div>
              </footer>
            </div>
          );
        
    }
}