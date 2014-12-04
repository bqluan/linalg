$(function() {
  function solve_1d(factors) {
    var A = [[factors[0]]]
    var b = [[factors[1]]]
    $.get('/solution?linalg=' + JSON.stringify({"A": A, "b": b}))
     .done(function(data) {
        var $solution = $('.solution')
        var solution = JSON.parse(data)
        var vars = ['x', 'y', 'z']
        $solution.empty()
        for (var i = 0; i < solution.length; i++) {
          $solution.append('<p><var>' + vars[i] + '</var> = ' + solution[i][0] + '</p>')
        }
        $solution.show()
        $solution.removeClass('animated rubberBand').addClass('animated rubberBand').one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated rubberBand')
          }
        )
      })
     .fail(function() {
        var $solution = $('.solution')
        $solution.empty()
        $solution.append('<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>&nbsp;这个题太难了我不会')
        $solution.show()
        $solution.removeClass('animated rubberBand').addClass('animated rubberBand').one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated rubberBand')
          }
        )
      })
  }

  function solve_2d(factors) {
    var A = [[factors[0], factors[1]], [factors[3], factors[4]]]
    var b = [[factors[2]], [factors[5]]]
    $.get('/solution?linalg=' + JSON.stringify({"A": A, "b": b}))
     .done(function(data) {
        var $solution = $('.solution')
        var solution = JSON.parse(data)
        var vars = ['x', 'y', 'z']
        $solution.empty()
        for (var i = 0; i < solution.length; i++) {
          $solution.append('<p><var>' + vars[i] + '</var> = ' + solution[i][0] + '</p>')
        }
        $solution.show()
        $solution.removeClass('animated rubberBand').addClass('animated rubberBand').one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated rubberBand')
          }
        )
      })
     .fail(function() {
        var $solution = $('.solution')
        $solution.empty()
        $solution.append('<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>&nbsp;这个题太难了我不会')
        $solution.show()
        $solution.removeClass('animated rubberBand').addClass('animated rubberBand').one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated rubberBand')
          }
        )
      })
  }

  function solve_3d(factors) {
    var A = [[factors[0], factors[1], factors[2]], [factors[4], factors[5], factors[6]], [factors[8], factors[9], factors[10]]]
    var b = [[factors[3]], [factors[7]], [factors[11]]]
    $.get('/solution?linalg=' + JSON.stringify({"A": A, "b": b}))
     .done(function(data) {
        var $solution = $('.solution')
        var solution = JSON.parse(data)
        var vars = ['x', 'y', 'z']
        $solution.empty()
        for (var i = 0; i < solution.length; i++) {
          $solution.append('<p><var>' + vars[i] + '</var> = ' + solution[i][0] + '</p>')
        }
        $solution.show()
        $solution.removeClass('animated rubberBand').addClass('animated rubberBand').one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated rubberBand')
          }
        )
      })
     .fail(function() {
        var $solution = $('.solution')
        $solution.empty()
        $solution.append('<span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>&nbsp;这个题太难了我不会')
        $solution.show()
        $solution.removeClass('animated rubberBand').addClass('animated rubberBand').one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated rubberBand')
          }
        )
      })
  }

  function solve_if_all_factors_are_given() {
    var factors = []
    var all_factors_are_given = true
    $('.factor > input').each(function() {
      var val = $(this).val()
      if (/^[\+\-]?[0-9]+$/g.test(val)) {
        factors.push(parseInt(val, 10))
      } else {
        all_factors_are_given = false
      }
    })
    if (all_factors_are_given) {
      if (factors.length === 2) {
        solve_1d(factors)
      } else if (factors.length === 6) {
        solve_2d(factors)
      } else if (factors.length === 12) {
        solve_3d(factors)
      }
    }
  }

  $('[data-toggle="tooltip"]').tooltip()

  $('.factor').click(function() {
    var $this = $(this)
    var $editing = $('.editing')
    if ($editing.length === 0) {
      $this.addClass('editing')
      $this.children('input').select()
    } else if ($(event.target).parents('.editing').length === 0) {
      $editing.removeClass('animated shake').addClass('animated shake').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('animated shake')
        }
      )
    }
  })

  $('.factor').focusout(function(event) {
    var $this = $(this)
    var val = $this.children('input').val()
    if (/^[\+\-]?[0-9]+$/g.test(val)) {
      $this.removeClass('editing')
      solve_if_all_factors_are_given()
    } else {
      $this.removeClass('animated shake').addClass('animated shake').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('animated shake')
        }
      )
    }
  })

  $('.factor > input').keyup(function() {
    var $this = $(this)
    $this.prev().text($this.val())
  })
})
