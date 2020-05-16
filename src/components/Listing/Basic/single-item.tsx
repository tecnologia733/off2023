import React from 'react'
import { ItemData, Theme } from '../../../utils/models'

interface Props {
  item: ItemData
  theme: Theme
  handleOpenModal: (e, item: ItemData) => void
}

const SingleItem: React.FC<Props> = ({ item, theme, handleOpenModal }) => {
  const hasProperty = (property) => property && property !== 'nil'
  const { primary, text, subtext, customShadow } = theme

  const renderImage = () => {
    if (hasProperty(item.image)) {
      return <img className="w-full rounded-t-lg h-32 object-cover" src={item.image} alt={`Image of ${item.title}`} />
    }
    return <></>
  }

  const renderTitle = () => {
    if (hasProperty(item.title)) {
      return <div className={`font-bold text-gray-800 text-xl truncate`}>{item.title}</div>
    }
    return <></>
  }

  const renderSubtitle = () => {
    if (hasProperty(item.subtitle)) {
      return <p className={`text-gray-600 font-light truncate`}>{item.subtitle}</p>
    }
    return <></>
  }
  return (
    <div
      className={`max-w-sm mt-8 rounded-lg shadow-lg text-center bg-white ${
        hasProperty(item.url) && `hover:${customShadow} cursor-pointer`
      }`}
    >
      {renderImage()}
      <div className="px-6 py-4">
        {renderTitle()}
        {renderSubtitle()}
        <button
          onClick={(e) => handleOpenModal(e, item)}
          className={`py-2 px-4 rounded w-full bg-${primary} text-white mt-4`}
        >
          More Info
        </button>
      </div>
    </div>
  )
}

export default SingleItem
