import React, { Component } from 'react';
import './styles/dropdown.css';
import ArrowUp from './assets/arrowUp.svg';
import ArrowDown from './assets/arrowDown.svg';
import BlackColor from './assets/black.png';
import WhiteColor from './assets/white.png';
import GreyColor from './assets/grey.webp';
import LightblueColor from './assets/lightblue.webp';
import OrangeColor from './assets/orange.webp';
import YellowColor from './assets/yellow.webp';

class Dropdown2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            isListOpen: false,
            headerID: 0,
            location: [
                {
                    id: 0,
                    title: '  BLACK',
                    selected: true,
                    key: 'location',
                    imgUrl: BlackColor
                },
                {
                    id: 1,
                    title: '  WHITE',
                    selected: false,
                    key: 'location',
                    imgUrl: WhiteColor
                },
                {
                    id: 2,
                    title: 'GREY',
                    selected: false,
                    key: 'location',
                    imgUrl: GreyColor
                },
                {
                    id: 3,
                    title: 'LIGHT BLUE',
                    selected: false,
                    key: 'location',
                    imgUrl: LightblueColor
                },
                {
                    id: 4,
                    title: 'ORANGE',
                    selected: false,
                    key: 'location',
                    imgUrl: OrangeColor
                },
                {
                    id: 5,
                    title: 'YELLOW',
                    selected: false,
                    key: 'location',
                    imgUrl: YellowColor
                }
              ]
        }
    }

    resetThenSet = (id, key) => {
        const temp = [...this.state[key]];
      
        temp.forEach((item) => item.selected = false);
        temp[id].selected = true;
      
        this.setState({
          [key]: temp,
        });
      }

    close = () => {
        this.setState({
          isListOpen: false,
        });
    }

    componentDidUpdate(){
        const { isListOpen } = this.state;
      
        setTimeout(() => {
          if(isListOpen){
            window.addEventListener('click', this.close)
          }
          else{
            window.removeEventListener('click', this.close)
          }
        }, 0)
      }


    toggleList = () => {
        this.setState(prevState => ({
          isListOpen: !prevState.isListOpen
       }))
     }

     selectItem = (item) => {
        const { id, key } = item;
      
        this.setState({
          headerID: id,
          isListOpen: false,
        }, () => this.resetThenSet(id, key));
      }

    render() {
        const { isListOpen } = this.state;
        const list = this.state.location;
      
        return (
          <div className="dd-wrapper">
            <button
              type="button"
              className="dd-header"
              onClick={this.toggleList}
            >
            <div className="dd-header-title">
            <img src={this.state.location[this.state.headerID].imgUrl} alt="colordisplay" height='20' width='20' style={{ marginRight: 10 }} />
                    {this.state.location[this.state.headerID].title}      
            </div>
              {isListOpen
                ? <span><img src={ArrowUp} alt="arrowUp"/></span>
                : <span><img src={ArrowDown} alt="arrowDown" /></span> }
            </button>
            {isListOpen && (
              <div
                role="list"
                className="dd-list"
              >
                {list.map((item) => {
                    if(item.selected){
                        return null;
                    }
                    return(
                <button
                    type="button"
                    className="dd-list-item"
                    key={item.id}
                    onClick={() => this.selectItem(item)}
                  >
                <img src={item.imgUrl} alt="colordisplay" height='20' width='20' style={{ marginRight: 10 }}/>
                    {item.title}
                  </button>
                 
                )
                    }
                )}
              </div>
            )}
          </div>
        )
      }
}

export default Dropdown2;