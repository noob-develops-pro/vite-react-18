import avatar from '../../../assets/default-avatar.svg'

function Person({ name, images, nickName }) {
  const imageUrl = images?.[0]?.small?.url || avatar
  return (
    <div>
      <img src={imageUrl} alt='name' style={{ width: '50px' }} />
      <h3>{name}</h3>
      <h3>{nickName}</h3>
    </div>
  )
}

export default Person
