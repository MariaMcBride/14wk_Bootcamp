import React, { useState } from 'react'

const Tabs = (props) => {
  console.log(props);
  const [selectedTab, setSelectedTab] = useState(props.items[1]);

  return (
    <div className="card mx-auto mt-5 py-3 bg-dark">
      <ul className="nav nav-tabs px-3">
        {
          props.items.map((item, i) => {
            let classAdds = "";
            item === selectedTab && (classAdds += "active fw-bold fade-in bg-light");
            return (
              <li className="nav-item">
                <button key={i} onClick={(e) => { setSelectedTab(item); 
                // if (item.hasOwnProperty('callback')) {
                //   item.callback();
                // }                 
                item?.callback?.(); 
                  }} className={`nav-link link-info ${classAdds}`}>{item.header}</button>
              </li>)
          })
        }
      </ul>
      <div class="tab-content text-white p-4">
        <p>{selectedTab.callback()}</p>
      </div>
    </div>
  )
}

export default Tabs;