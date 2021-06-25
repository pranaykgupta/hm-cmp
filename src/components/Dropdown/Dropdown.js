import React, { useEffect, useRef, useState } from 'react';
import './styles/dropdown.css';
import ArrowUp from './assets/arrowUp.svg';
import ArrowDown from './assets/arrowDown.svg';
import BlackColor from './assets/black.png';
import WhiteColor from './assets/white.webp';
import GreyColor from './assets/grey.webp';
import LightblueColor from './assets/lightblue.webp';
import OrangeColor from './assets/orange.webp';
import YellowColor from './assets/yellow.webp';

function Dropdown() {
  const ref = useRef();
  const headerref= useRef();
  useOnClickOutside(ref, headerref, () => setIslistopen(false));
  const [isListOpen, setIslistopen] = useState(false);
  const [headerID, setHeaderID] = useState(0);
  const [location, setLocation] = useState([
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
  ]);

  const resetThenSet = (id, key) => {
    const temp = location;
  
    temp.forEach((item) => item.selected = false);
    temp[id].selected = true;
  
    setLocation(temp);
  }

  // const close = () => {
  //   // setIslistopen(false);
  //   // console.log("inside close!!");
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //         if(isListOpen){
  //           window.addEventListener('click', close)
  //         }
  //         else{
  //           window.removeEventListener('click', close)
  //         }
  //       }, 0);
  // });


  const toggleList = () => {
      setIslistopen(!isListOpen);
  }

  const selectItem = (item) => {
    const { id, key } = item;
    setHeaderID(id);
    setIslistopen(false);
    resetThenSet(id, key);
  }

 
  return (
    <div className="dd-wrapper">
      <button
        type="button"
        className="dd-header"
        onClick={toggleList}
        ref={headerref}
      >
      <div className="dd-header-title">
      <img src={location[headerID].imgUrl} alt="colordisplay" height='20' width='20' style={{ marginRight: 10 }} />
              {location[headerID].title}      
      </div>
        {isListOpen
          ? <span><img src={ArrowUp} alt="arrowUp"/></span>
          : <span><img src={ArrowDown} alt="arrowDown" /></span> }
      </button>
      {isListOpen && (
        <div
          role="list"
          className="dd-list"
          ref={ref}
        >
          {location.map((item) => {
              if(item.selected){
                  return null;
              }
              return(
              <button
                  type="button"
                  className="dd-list-item"
                  key={item.id}
                  onClick={() => selectItem(item)}
                >
              <img src={item.imgUrl} alt="colordisplay" height='20' width='20' style={{ marginRight: 10 }}/>
                  {item.title}
                </button>
              
              )
              })
            }
        </div>
      )}
    </div>
  )
  
}

function useOnClickOutside(ref, headerref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        if(!headerref.current || headerref.current.contains(event.target)){
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, headerref, handler]
  );
}

export default Dropdown;