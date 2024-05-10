import uuid4 from 'uuid4';
import moment from 'moment';

(function () {

  $(window).on('load', function() {

    let adaptEmbeds = document.querySelectorAll('.adapt-embed');
    let uuid = uuid4();

    // define an observer instance
    let observer = new IntersectionObserver(onIntersection, {
      root: null,   // default is the viewport
      threshold: 1 // percentage of target's visible area. Triggers "onIntersection"
    });
    // callback is called on intersection change
    function onIntersection(entries, opts){
      entries.forEach(function(entry) {
        let message = {
          adaptId: entry.target.id,
          reviewSessionId: uuid,
          start: '',
          end: ''
        };

        let startMoment;
        let endMoment;

        if (entry.isIntersecting) {
          entry.target.classList.toggle('is-viewed', entry.isIntersecting);
          // message.adaptId = entry.target.id;
          // message.reviewSessionId = uuid;
          startMoment = moment();
          message.start = startMoment;
          //console.log(message);
        }

        


        if ( (!entry.isIntersecting) && (entry.intersectionRect.x != 0) ) {
          entry.target.classList.toggle('is-viewed', entry.isIntersecting);
          //message.end = moment();
          endMoment = moment();
          //console.log(message);

          message.end = endMoment;
          console.log(message);

          entry.target.contentWindow.postMessage(message, "*");
        }

        

        //console.log(message);
        
      });

     // console.log(message);
     
    }
    // Use the observer to observe an element
    adaptEmbeds.forEach(function(embed){
        observer.observe(embed);
    });
    
  });


})();

