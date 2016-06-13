//business logic
function ToDo (task, materials, time, due, collaborator) {
  this.task = task;
  this.materials = materials;
  this.time = time;
  this.due = due;
  this.collaborator = collaborator;
}

// user interface logic
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();
		// debugger;
    var task = $("input#new-task").val();
    var materials = $("input#new-materials").val();
    var time = $("input#new-time").val();
    var due = $("input#new-due").val();
    var collaborator = $("input#new-collaborator").val();

    var newToDo = new ToDo(task, materials, time, due, collaborator);
    var liId = task;
    $("ul#task-list").append("<li><span class='task-item'>" + newToDo.task +
          "</span><span class='completed-button glyphicon glyphicon-ok'></span>"
         + "</li>");

    $(".task-item").last().click(function() {
      $("#show-task").show();
      $("#show-task h2").text(newToDo.task);
      $(".materials").text(newToDo.materials);
      $(".time").text(newToDo.time);
			$(".due").text(newToDo.due);
      $(".collaborator").text(newToDo.collaborator);
    });

    $(".completed-button").last().click(function() {
        $(this).parents("li").toggleClass("strikethrough");
    });

    $("input#new-task").val("");
    $("input#new-materials").val("");
		$("input#new-time").val("");
    $("input#new-due").val("");
		$("input#new-collaborator").val("");
  });
});
