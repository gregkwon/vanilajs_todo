/*global app, $on*/


(function (){
    /*
     @param {string} name The name of your new to do list.
    */

    function todolist(name){
        this.storage=new app.Store(name);
        this.model=new app.Model(this.storage);
        this.template = new app.Template();
        this.view=new app.View(this.tempalte);
        this.controller=new app.Controller(this.model, this.view);

    }

    var todo = new todolist('this is vanilajs');

    function setView(){
            todo.controller.setView(document.location.hash);
    }
    $on(window, 'load', setView);
    $on(window, 'hashchange', setView);
})();