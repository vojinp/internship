export const NewItemModal = () => {
        
    return (
        <div className="modal-wrap js-modal">
          <div className="modal js-modal-inner">
            <h2>Create a task today:</h2>
            <form action>
              <div className="field-wrap">
                <input className="field" type="text" placeholder="Title.." />
              </div>
              <div className="btn-wrap align-right">
                <input className="btn" type="submit" defaultValue="Create" />
              </div>
            </form>
          </div>
        </div>)
}