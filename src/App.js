import './App.css'

const count = 90
function getName() {
  return 'jack'
}
const lists = [
  { id: 1, name: 'Vue' },
  { id: 2, name: 'react' },
  { id: 3, name: 'angular' }
]
const flag = true
function App() {
  const handleClick = (e) => {
    console.log('🚀 ~ handleClick ~ e:', e)
  }
  const handleClick2 = (name, e) => {
    console.log('🚀 ~ handleClick2 ~ e:', e)
    console.log('🚀 ~ handleClick2 ~ name:', name)
  }
  return (
    <div className='App'>
      this is a App
      <p>{'this is a message'}</p>
      <p>{count}</p>
      {/* 方法调用  */}
      <p>{getName()}</p>
      <p>{new Date().getDate()}</p>
      <div style={{ color: 'red' }}>this is a div</div>
      <ul>
        {lists.map((li) => (
          <li key={li.id}>{li.name}</li>
        ))}
      </ul>
      <div>{flag && <span>this is a span</span>}</div>
      <div>{flag ? <span>jack</span> : <span>Loading...</span>}</div>
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => handleClick2('jack', e)}>click me2</button>
    </div>
  )
}

export default App
