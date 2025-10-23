document.addEventListener("DOMContentLoaded", function () {
    const quoteEl = document.getElementById("quote");
    const sourceEl = document.getElementById("source");
  
    if (!quoteEl || !sourceEl) return;
  
    const quotes = [
      {text:"Love the Lord and keep His commandments; that is the way to lasting happiness.",source:"Summary of Mosiah 2"},
      {text:"Serve others and you serve God.",source:"Paraphrase of Mosiah 2:17"},
      {text:"Press forward in Christ with hope and love.",source:"Summary of 2 Nephi 31:20"},
      {text:"Faith leads to miracles; doubt blocks them.",source:"Inspired thought"},
      {text:"Charity never fails.",source:"1 Corinthians 13"},
      {text:"Be still and know that God is God.",source:"Psalm 46"},
      {text:"Walk uprightly before the Lord and He will direct your path.",source:"Summary of Proverbs 3"},
      {text:"When life feels heavy, remember that grace is sufficient.",source:"Echo of Ether 12"},
      {text:"God’s tender mercies reach all who trust Him.",source:"1 Nephi 1"},
      {text:"Ask and it shall be given; seek and you shall find.",source:"Matthew 7"},
      {text:"If ye have faith as a grain of mustard seed, ye can move mountains.",source:"Matthew 17"},
      {text:"Come unto Christ and be perfected in Him.",source:"Summary of Moroni 10"},
      {text:"Cleave unto truth and light will grow within you.",source:"Doctrine & Covenants 50"},
      {text:"The Lord will go before you and prepare the way.",source:"1 Nephi 3"},
      {text:"Endure in patience and joy will follow.",source:"Doctrine & Covenants 121"},
      {text:"Peace comes through the Spirit of Christ.",source:"Moroni 7"},
      {text:"Choose the right even when it’s hard.",source:"Children’s Hymn Principle"},
      {text:"Small acts of faith open great doors of blessing.",source:"President Russell M. Nelson — paraphrase"},
      {text:"Joy comes when we focus on the Savior.",source:"President Nelson — paraphrase"},
      {text:"The future is as bright as your faith.",source:"President Thomas S. Monson"},
      {text:"Doubt your doubts before you doubt your faith.",source:"Elder Dieter F. Uchtdorf"},
      {text:"Look for the good and you will find God’s hand in your life.",source:"President Henry B. Eyring — paraphrase"},
      {text:"The gospel is the plan of happiness.",source:"President Gordon B. Hinckley — summary"},
      {text:"Prayer is the key that opens heaven’s door.",source:"President Spencer W. Kimball — summary"},
      {text:"Stand in holy places and be not moved.",source:"Doctrine & Covenants 87"},
      {text:"Faith in Jesus Christ is the greatest power we possess.",source:"President Nelson — summary"},
      {text:"Kindness is a language the deaf can hear and the blind can see.",source:"Mark Twain — often quoted in LDS talks"},
      {text:"True disciples lift others.",source:"Elder Jeffrey R. Holland — summary"},
      {text:"Heaven is cheering you on today, tomorrow, and forever.",source:"Elder Holland — paraphrase"},
      {text:"Hope is never lost when our trust is in Christ.",source:"Elder Neil L. Andersen — summary"},
      {text:"The temple is a place of learning, peace, and promise.",source:"President Howard W. Hunter — summary"},
      {text:"Repentance is not punishment; it is the path to peace.",source:"President Nelson — summary"},
      {text:"Choose to be grateful no matter what.",source:"President Uchtdorf — summary"},
      {text:"Lift where you stand.",source:"President Dieter F. Uchtdorf"},
      {text:"Happiness is found in the journey of becoming like the Savior.",source:"President Nelson — summary"},
      {text:"Christ’s grace is sufficient for all who humble themselves.",source:"Summary of Ether 12"},
      {text:"Look to God and live.",source:"Alma 37"},
      {text:"By small and simple things are great things brought to pass.",source:"Alma 37"},
      {text:"Trust in the Lord with all thine heart.",source:"Proverbs 3"},
      {text:"Peace I leave with you, my peace I give unto you.",source:"John 14:27"},
      {text:"Faith builds bridges to eternal joy.",source:"Inspired thought"},
      {text:"Be kind and patient; every soul is fighting a hard battle.",source:"Adapted proverb"},
      {text:"Through Christ we can do all things.",source:"Philippians 4:13"},
      {text:"Happiness is the purpose and design of existence.",source:"President David O. McKay"},
      {text:"God will make more out of your life than you can imagine.",source:"President Hinckley"},
      {text:"True peace comes when we trust God more than our fears.",source:"President Nelson — summary"},
      {text:"Light will always chase away darkness.",source:"John 1 — summary"},
      {text:"When we serve with love, we become more like Him.",source:"Mosiah 2 — summary"},
      {text:"Gratitude turns ordinary days into blessings.",source:"President Uchtdorf — paraphrase"},
      {text:"He knows you perfectly and loves you eternally.",source:"President Nelson — paraphrase"},
      {text:"Stand tall in truth and light will follow.",source:"Doctrine & Covenants — summary"}
    ];
  
    function showRandomQuote() {
      const q = quotes[Math.floor(Math.random() * quotes.length)];
      quoteEl.textContent = `"${q.text}"`;
      sourceEl.textContent = `— ${q.source}`;
      quoteEl.style.opacity = 1;
      sourceEl.style.opacity = 1;
    }
  
    setTimeout(showRandomQuote, 400);
  });