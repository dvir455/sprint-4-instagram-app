import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'
export default function AddPost({ isOpen, setIsOpen }) {
  const user = JSON.parse(sessionStorage.getItem('user'))
  useEffect(() => { if (isOpen) { document.body.style.overflow = 'hidden' } else { document.body.style.overflow = 'auto' } }, [isOpen]);

  const [post, setPost] = useState({ caption: '' });
  const [level, setLevel] = useState(0);
  const handlePostInfo = (e) => {
    if (level === 0) setLevel(1)
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleCloseModal = () => {
    setIsOpen(false);
    setLevel(0);
    setPost({ caption: '' });

  }

  function handleAddPostLevel() {
    switch (level) {
      case 0:
        return (
          <div className="AddPost__SelectPhoto__Container">
            <svg aria-label="Icon to represent media such as images or videos" className="_ab6-" color="#262626" fill="#262626" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4L58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5l-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6L61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6l-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>
            <div className="AddPost__SvgText">
              <h2>Drag photos and videos here</h2>
            </div>
            <div className="AddPost__Import__Button">
              <div className="AddPost__Import__Button__Container">
                <label>
                  <input type="file" name='image' onInput={handlePostInfo} />
                  <span>Select from computer</span>
                </label>
              </div>
            </div>

          </div>);
      case 1: return (

        <div className="AddPost__AddInfo__Container">
          <div className="AddPost__AddInfo__Image">
            <img src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2018/11/childAngry-1202675391-770x533-1-650x428.jpg" alt="" />
          </div>
          <div className="AddPost__AddInfo__Info__Container">
            <div className="AddPost__AddInfo__Info__Header">
              <div className="AddPost__AddInfo__Info__Header__Container">
                <img src={user.profilePic} alt="" />
                <h3>{user.username}</h3>
              </div>
            </div>
            <div className="AddPost__AddInfo__Info__TextZone__Container">
              <div className="AddPost__AddInfo__Info__TextArea__Container">
                <textarea onInput={handlePostInfo} name='caption' aria-label="Write a caption..." placeholder="Write a caption..." autoComplete="off" autoCorrect="off" ></textarea>
              </div>
              <div className="AddPost__AddInfo__Info__Emoji__Charcount">
                <div className="AddPost__AddInfo__Info__Emoji">
                  <button className='AddPost__AddInfo__Info__Emoji__Btn'>😀</button>
                </div>
                <div className="AddPost__AddInfo__Info__Charcount__Container">
                  <div className="AddPost__AddInfo__Info__Charcount">
                    <span>{post.caption.length}</span>/<span>2,200</span>

                  </div>
                </div>
              </div>
            </div>
            <div className="AddPost__AddInfo__Info__Location__Container">
              <div className="AddPost__AddInfo__Info__Location">
                <input placeholder='Add location' name='location' className='AddPost__AddInfo__Info__Location__Input' type="text" onInput={handlePostInfo} />
              </div>

            </div>
          </div>
        </div>
      )
      // case 1:  
    }
  }



  if (!isOpen) return null
  return ReactDOM.createPortal(
    <>
      <div className="AddPost__Background__Shadow">
        <button className='AddPost__Modal__Close' onClick={handleCloseModal}>✖</button>

        <div className='AddPost__Container__Vertical'>
          <div className="AddPost__Container__Horizontal">
            <div className="AddPost__Container">
              <div className="AddPost__Container__Header">
                <h1>
                  Create new post
                </h1>
              </div>
              <div className="AddPost__Container__Body">

                {handleAddPostLevel()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
