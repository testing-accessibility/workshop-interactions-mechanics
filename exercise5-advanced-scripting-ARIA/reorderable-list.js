import React from "react"
import * as ReactAriaLiveAnnouncer from "@react-aria/live-announcer"
import "./reorderable-list.scss"

const itemData = ['Paddle Boards', 'Bikes', 'Skis']

const ReorderableListItem = React.forwardRef(({name, index, callbackFn}, ref) => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault()
    }
  }
  return (
    <li>
      {name}
      <button
        aria-label={`Reorder ${name} from position ${index + 1}`}
        className="edit"
        onKeyDown={handleKeyDown}
        onKeyUp={(event) => {callbackFn(event, index) }}
        ref={ref}
       ></button>
    </li>
  )
})

const announce = (message) => {
  // ReactAriaLiveAnnouncer.announce(message, 'polite')
  
  ReactAriaLiveAnnouncer.announce(message, 'assertive')
}

const ReorderableList = () => {
  const [items, setItems] = React.useState(itemData)
  const [isReordering, setIsReordering] = React.useState(false)
  const listButtonRefs = React.useRef([])
  
  const toggleEditMode = () => {
    setIsReordering(!isReordering)
    if (isReordering) {
      announce('Stopped editing')
    } else {
      announce('Edit Mode activated')
    }
  }
  const itemCallbackFn = (event, itemIndex) => {
    let messageRead = false
    if (event.key === 'ArrowDown') {
      if (itemIndex < items.length) {
        let nextIndex = itemIndex + 1
        let tmpArray = items.slice()
        tmpArray.splice(nextIndex, 0, tmpArray.splice(itemIndex, 1).pop())
        setItems(tmpArray)
        announce(`${tmpArray[nextIndex]} moved to position ${nextIndex + 1}`)

        listButtonRefs.current[nextIndex].focus()
      }
    } else if (event.key === 'ArrowUp') {
      if (itemIndex > 0) {
        let prevIndex = itemIndex - 1
        let tmpArray = items.slice()
        tmpArray.splice(prevIndex, 0, tmpArray.splice(itemIndex, 1).pop())
        setItems(tmpArray)
        announce(`${tmpArray[prevIndex]} moved to position ${prevIndex + 1}`)

        listButtonRefs.current[prevIndex].focus()
      }
    }
  }
  return (
    <div className={`sortable-list-group ${isReordering ? `active` : null}`}>
      <button id="edit-list" onClick={toggleEditMode}>
        <span className="editingText">Exit edit mode</span>
        <span className="defaultText">Edit gear list</span>
      </button>
      <ul className="sortable-list"
        aria-roledescription="Sortable List"
        role={`${isReordering ? `application` : `group`}`}
      >
          {items.map((item, index) => {
            return <ReorderableListItem
                     callbackFn={itemCallbackFn}
                     key={index}
                     name={item}
                     index={index}
                     ref={(ref) => listButtonRefs.current.push(ref)}
                   />
          })}
      </ul>
    </div>
  )
}

export default ReorderableList
