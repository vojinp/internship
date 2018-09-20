import TODOItem from './TODOItem';

const TODOItems = ({
    items,
    onRemoveItem
}) => {
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