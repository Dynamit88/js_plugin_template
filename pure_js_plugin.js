/*
 * Template For Single Instance Plugin
 * @Author: Ivan Mykolenko
 * @Date: 24.07.2019
 */


;
(function () { // Anonymous function 
    var Plugin = function (opts) {
        this.options = Object.assign(Plugin.defaults, opts);
        this.wrapper = document.createElement('div');
        buildUI(this);
        addEvents(this);
    }

    // Attach our defaults for plugin to the plugin itself
     Plugin.defaults = {
        selector : '',
        wrapperClass : 'tags-input-wrapper',
        tagClass : 'tag',
        max : null,
        duplicate: false
    }
    
    

    // Public method
    Plugin.prototype.doSomething = function (string) {
        echo(string);
        return this;
    }


    // Private function to initialize the UI Elements
    function buildUI(plugin) {
        plugin.wrapper.classList.add(plugin.options.wrapperClass);
        
        document.body.appendChild(plugin.wrapper); 

    }

    function addEvents(plugin) {
        plugin.wrapper.addEventListener('click', function () {

        });
    }

   

    // Make plugin accessible globally
    window.Plugin = Plugin;
    

    function echo(txt) {
        console.log(txt);
    }
})();
