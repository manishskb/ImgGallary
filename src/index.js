import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const sName = 'Yadav';

// ReactDOM.render(
//   <>
//   <h1>Manish {sName} Netflix Top 5 web Series</h1>
//   <p>Actually Thay are very famous in all over world.</p>
//   <ol>
//     <li>GOT</li>
//     <li>Dark</li>
//     <li>The Robot</li>
//     <li>Rich man</li>
//     <li>Famous</li>
//   </ol>
//   </>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <>
    <div className='heading'>
        <h1>My Beautiful image gallary.</h1>
    </div>
    <div className='imagesize'>
      <div className='gallery'>
        <img src="https://picsum.photos/200/300" alt="randomImage" />
        <div class="desc">Add a description of the image here</div>
      </div>
      <div className='gallery'>
        <img src="https://picsum.photos/250/300" alt="randomImage" />
        <div class="desc">Add a description of the image here</div>
      </div>
      <div className='gallery'>
        <img src="https://picsum.photos/300/300" alt="randomImage" />
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>
  </>,
  document.getElementById('root')
);