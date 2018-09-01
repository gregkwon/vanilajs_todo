(function (windows){
    'use strict';
	/**
	 * Takes a model and view and acts as the controller between them
	 *
	 * @constructor
	 * @param {object} model The model instance
	 * @param {object} view The view instance
	 */

     function Controller(model, view){
            var self = this;
            self.mode = model;
            self.view = view;
            // 새로 입력
        self.view.bind('newTodo', function(title){
                    self.addItem(title);
        });
        // 입력내용 수정
        self.view.bind('itemEdit', function(item){
                    self.editItem(item.id);
        });

        self.view.bind('itemEditDone', function(item){
                    self.editItemSave(item.id, item.title);
        });
        self.view.bind('itemEditCancel', function(item){
                    self.editItemCancel(item.id);
        });
        self.view.bind('itemEditCancel', function(item){
            self.editItemCancel(item.id);
        });
        self.view.bind('itemEditRemove', function(item){
            self.removeItem(item.id);
        }); 
     }

    /* Load and initalies the view
    @paracm{string} '' | 'active' | 'completed' 
    */

     Controller.prototype.serView = function(locationHash){
            var route = locationHash.split('/')[1];
            var page = route|| '';
            this._updateFilterState(page);

     };

     /** 
      * An event to fire on load. Will get all items and display them in the todo-list
     */

     Controller.prototype.showAll=function(){
         var self = this;
         self.model.read(function(data){
                self.view.render
         });
     }
})