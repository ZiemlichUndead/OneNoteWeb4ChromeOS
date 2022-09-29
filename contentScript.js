(() => {
 
    
    window.addEventListener('pointerdown', function(event) {
        if(event.pointerType == "pen" && event.isTrusted){
            var eventClone = new event.constructor(event.type, event);
            var target = document.elementFromPoint(event.x, event.y);
            target.dispatchEvent(eventClone);
        }
    }, true);
    
    
    
})();
