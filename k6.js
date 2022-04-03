if( typeof CL == 'undefined' ) CL = console.log

$( () => {
  if( $('[name="csrf-token"]'       ).length > 0 ) $( () => $.ajaxSetup( { headers: { 'X-CSRF-TOKEN': $('[name="csrf-token"]'       ).attr   ( 'content' ) } } ) )
  if( $('[data-bs-toggle="tooltip"]').length > 0 )                                                    $('[data-bs-toggle="tooltip"]').tooltip(           )
} )

class k6 {

  // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----  // CONFIG
  static config = {
    debug      : false,
    debug_trace: false,
  } // static

  // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----  // CONSOLE LOG
  static cl() {
    if( ! this.config.debug       ) return
    if(   this.config.debug_trace ) console.trace()
                                    console.log  ( 'k6.cl', [].slice.call( arguments ) ) // https://stackoverflow.com/a/960870/8930845
  } // cl

  // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----  // DOCUMENT TRIGGER
  static dt( NAME, DATA = null ) {
            $( document ).trigger(    NAME     , DATA )
    k6.cl( `$( document ).trigger( '${NAME}' )`, DATA )
  } // dt

  // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----  // ICON
  static icon( CODE = 'k6', WIDTH = 16, HEIGHT = 16, CLASS = '', STYLE = '', ATTR = '' ) {
    if( typeof CODE == 'string' ) CODE = this.icon_svg[ CODE ]
    return `<svg width="${WIDTH}" height="${HEIGHT}" class="${CLASS}" style="${STYLE}" ${ATTR} viewBox="${CODE[0]}">${CODE[1]}</svg>`
  } // icon
  static icon_svg = {
    k6: [ '0 0 512 512', '<g><path fill="currentColor" d="M512,255.9V64c0-35.3-28.7-64-64-64H256H64C28.7,0,0,28.7,0,64v192v192c0,35.3,28.7,64,64,64h192h192c35.3,0,64-28.7,64-64 V255.9l-64,0.1v153.4c0,10.8-3.6,19.8-10.9,27.1c-7.7,7.7-16.7,11.5-27.1,11.5h-77.1H256h-76.9h-76.6c-10.8,0-19.8-3.8-27.1-11.5 c-7.7-7.3-11.5-16.3-11.5-27.1V293.8V256H64v-41.4V102c0-10.4,3.8-19.4,11.5-27.1C82.8,67.6,91.8,64,102.6,64h76.6H256h76.9H410 c10.4,0,19.4,3.6,27.1,10.9c7.3,7.7,10.9,16.7,10.9,27.1v77.1h-76.6v-38.6h-38.6H256v0.1h-76.9h-38.5v77.1h38.5H256v-0.1h76.9H410 c10.4,0,19.4,3.6,27.1,10.9c7.3,7.7,10.9,16.7,10.9,27.1v0.3H512z"/><polygon points="256,294.3 179.1,294.3 140.6,294.3 140.6,371.4 179.1,371.4 256,371.4 332.9,371.4 371.4,371.4 371.4,357.9  371.4,294.3 332.9,294.3"/></g>'],
  } // icon_svg



/*

  $( () => $('[data-bs-toggle="tooltip"]').tooltip() )

  function _jc_ucwords( text ) {
    return text.toLowerCase().replace( /\b[a-z]/g, text => { return text.toUpperCase() } )
  } // function

  function _jc_number_format( number, decimals, dec_point, thousands_sep ) {
    number         = ( number + '' ).replace( /[^0-9+\-Ee.]/g, '' )
    var n          = ! isFinite( + number   ) ? 0 :           + number  ,
        prec       = ! isFinite( + decimals ) ? 0 : Math.abs( decimals ),
        sep        = ( typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec        = ( typeof dec_point     === 'undefined') ? '.' : dec_point    ,
        s          = '',
        toFixedFix = function( n, prec ) { var k     = Math.pow  ( 10, prec )
                                           return '' + Math.round( n * k    ) / k }
    s = ( prec ? toFixedFix( n, prec ) : '' + Math.round( n ) ).split( '.' )
    if(   s[ 0 ]        .length > 3    )   s[ 0 ]  = s[ 0 ].replace( /\B(?=(?:\d{3})+(?!\d))/g, sep )
    if( ( s[ 1 ] || '' ).length < prec ) { s[ 1 ]  = s[ 1 ] || ''
                                           s[ 1 ] += new Array( prec - s[ 1 ].length + 1 ).join( '0' ) }
    return s.join( dec )
  } // function

  function _jc_정수_보정() {
    if( parseInt( $( event.target ).val() ) < parseInt( $( event.target ).attr( 'min' ) ) ) $( event.target ).val(             $( event.target ).attr( 'min' ) )
    if( parseInt( $( event.target ).val() ) > parseInt( $( event.target ).attr( 'max' ) ) ) $( event.target ).val(             $( event.target ).attr( 'max' ) )
                                                                                            $( event.target ).val( Math.round( $( event.target ).val (       ) ) )
  } // function

  function _jc_보임_여부( selector, eq = null ) {
    if ( $( selector ).length <  0                 )                                                                return false
    if ( $( selector ).length == 1                 )   if( $( selector )         .css( 'display'    ) == 'none'
                                                       ||  $( selector )         .css( 'visibility' ) == 'hidden' ) return false; else return true
    if (    eq                !== null             )   if( $( selector ).eq( eq ).css( 'display'    ) == 'none'
                                                       ||  $( selector ).eq( eq ).css( 'visibility' ) == 'hidden' ) return false; else return true
    for( let i = 0; i < $( selector ).length; i ++ ) { if( $( selector ).eq( i  ).css( 'display'    ) != 'none'
                                                       &&  $( selector ).eq( i  ).css( 'visibility' ) != 'hidden' ) return true }      return false
  } // function

  function _jc_마휠_가로( 쿼셀, 배율 = 2 ) { <? # 마우스 휠 ?>
    $( 쿼셀 ).on( 'wheel', event => { event.preventDefault(); $( 쿼셀 ).scrollLeft( $( 쿼셀 ).scrollLeft() + ( event.originalEvent.deltaY * 배율 ) ) } )
  } // function

  function _jc_책장_리슨( 헤더 ) { <? # 책장 = 페이지 ?>
      $(`#${헤더}_책중`).on( 'wheel', event => { event.preventDefault(); $(`#${헤더}_책중`).scrollLeft( $(`#${헤더}_책중`).scrollLeft() + event.originalEvent .deltaY ) } )
      $(`#${헤더}_책좌`).on( 'click', event =>                           $(`#${헤더}_책중`).scrollLeft( $(`#${헤더}_책중`).scrollLeft() - $(`#${헤더}_책중`).width()  )   )
      $(`#${헤더}_책우`).on( 'click', event =>                           $(`#${헤더}_책중`).scrollLeft( $(`#${헤더}_책중`).scrollLeft() + $(`#${헤더}_책중`).width()  )   )
      $(`.${헤더}_책장`).on( 'click', event => { $(`.${헤더}_책장`).removeClass( 'text-dark fw-bold' )
                                                 $( event.target  ).   addClass( 'text-dark fw-bold' ) } ) // on
  } // function

*/

} // class
