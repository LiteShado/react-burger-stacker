const Menu = (props) => {

const StackBurger = (item) => {
    let array=[]
    array.push(item, ...props.burgerStack)
    props.setBurgerStack([...array])
}

    return (
        <div className="menu">
            {props.menuItems.map((item, i) => {
                return <div key={i}>
                <div>
                 <input className = 'item' type = 'button' value = {item.name} style = {{backgroundColor: item.color}} onClick={(e) => {StackBurger(item)}} />
                </div>
            </div>
            })}
        </div>
    )
}

export default Menu



                // return <div
                //     key={i}
                //     className="item"
                //     style={{backgroundColor:item.color}} onClick={StackBurger(item)}>
                //         <div {item.name}>
                //         </div>
                //     </div>
