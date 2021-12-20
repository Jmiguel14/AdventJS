function pangram(letter) {
   const spanishLyrics = [
       'aäáAÄ', 'bB', 'cC', 'dD', 'eéëEËÉ', 'fF', 'gG', 'hH', 'iíïIÍÏ', 'Jj', 'kK', 
       'lL', 'mM', 'nN', 'ñÑ', 'oóöOÓÖ', 'pP', 'Qq', 'rR', 'sS', 'tT', 'uúüUÚÜ', 'vV', 
       'wW', 'xX', 'yY', 'zZ'
    ]

   for(var lyrics of spanishLyrics){
       const regex = new RegExp(`[${lyrics}]`, 'g')
       const haveLyrics = letter.match(regex)
       if(!haveLyrics){
           return false
       }
   }
   return true
}
