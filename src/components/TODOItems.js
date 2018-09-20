import TODOItem from './TODOItem';

const TODOItems = ({
    items,
    onRemoveItem
}) => {
    console.log(items);
    return (
        <main className="main">
            <div className="wrap">
            {items.map((item) =>
            <TODOItem key={item.id}
                      onRemoveItem = {onRemoveItem}
                      {...item}/>	)}
            </div>
        </main>
    )
};

export default TODOItems;