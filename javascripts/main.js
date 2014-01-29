$(document).ready(function() {
    $("a.orbit-prev").hide();
    $("a.orbit-next").hide();
    $(".orbit-caption").hide();
    $(".imgHolder").hide();
    $(".imageHolderLink").click(function(event) {
        event.preventDefault();
        $(".imgHolder").show();
        var src = $(this).attr('data-src');
        $(".imgHolder div img").attr('src', src);
    });
    // $(document).foundation('orbit', {
    //   timer_speed: 10000,
    //   pause_on_hover: true,
    //   resume_on_mouseout: true,
    //   animation_speed: 500,
    //   bullets: false,
    //   stack_on_small: true,
    //   container_class: 'orbit-container',
    //   stack_on_small_class: 'orbit-stack-on-small',
    //   next_class: 'orbit-next',
    //   prev_class: 'orbit-prev',
    //   timer_container_class: 'orbit-timer',
    //   timer_paused_class: 'paused',
    //   timer_progress_class: 'orbit-progress',
    //   slides_container_class: 'orbit-slides-container',
    //   bullets_container_class: 'orbit-bullets',
    //   bullets_active_class: 'active',
    //   slide_number_class: 'orbit-slide-number',
    //   caption_class: 'orbit-caption',
    //   active_slide_class: 'active',
    //   orbit_transition_class: 'orbit-transitioning'
    // });
});