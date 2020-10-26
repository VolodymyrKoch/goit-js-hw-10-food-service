export default function () { 
  const bodyRef = document.querySelector('body');
  const switchToggleRef = document.querySelector('.theme-switch__toggle');
  
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  console.log(localStorage);
  if (localStorage.getItem("Theme_DARK")==="true"){
    bodyRef.classList.add(Theme.DARK)
    switchToggleRef.checked = true
    console.log(localStorage.getItem("Theme_DARK"))
  };
    
  switchToggleRef.addEventListener('change', (e) => {
    bodyRef.classList.add(Theme.LIGHT)
    bodyRef.classList.toggle(Theme.DARK);
    if (switchToggleRef.checked === true) {
      localStorage.setItem("Theme_DARK", true)
      }
    else {
      localStorage.setItem("Theme_DARK", false)
      };
    });
    }


// export default function () {
//   const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
//   };
//   const body = document.querySelector('body');
//   body.classList.add(Theme.LIGHT)

//   const themeChange = function () {
//     const switchToggle = document.querySelector("#theme-switch-toggle");

//     const fn = function (e) {
//       body.classList.toggle(Theme.DARK);
//       body.classList.toggle(Theme.LIGHT);
//       localStorage.setItem('checkboxStatus', e.target.checked);
//       localStorage.setItem('light', body.classList.contains(Theme.DARK));
//       // console.log(localStorage.setItem('checkboxStatus',e.target.checked));
//     }

//     switchToggle.addEventListener('change', fn)
//     // if (localStorage.setItem('checkboxStatus')===falce) { }
    
//   }
//   return { themeChange }
// }
// ------------------------------------------
// const divToolBar = document.querySelector('.toolbar');
// const divTheme = document.querySelector('.theme-switch');
// const divThemeControl = document.querySelector('.theme-switch__control');
// const bodyRef = document.querySelector('body')
// const switchToggle = document.querySelector('#theme-switch-toggle')
// console.log(switchToggle);

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// bodyRef.classList.add('Theme.LIGHT');
// const themeChanch = function () {
//   const fn = function (e) {
//             bodyRef.classList.toggle(Theme.LIGHT);
//             bodyRef.classList.toggle(Theme.DARK);
//             localStorage.setItem('checkboxStatus', e.target.checked);
//             localStorage.setItem('light', body.classList.contains(Theme.DARK));
//           }
//      switchToggle.addEventListener('change', fn)
//   return {themeChanch}
// };
