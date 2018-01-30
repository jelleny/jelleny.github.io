
function init() {
 Tabletop.init( { key: ‘https://docs.google.com/a/wefarm.org/spreadsheets/d/e/2PACX-1vSPnb9FCkZ3KiEoxBQu5NSLGX6opUE_Yz5BS2wqSSTafxtdS-nsHiIaTIkwxtdRjz8E3pYtOuX7JLeJ/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
