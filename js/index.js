(function() {
  //Don't know why doesn't work the 
  //html5 required in Mozilla and Safary in Codepen :S
  //Here it works correctly http://jsfiddle.net/sj2Em/
  jQuery(function() {
    $('.input-txt').on('focus', function() {
      var $container, $this, nPosition;
      $container = $('.container');
      $this = $(this);
      nPosition = $this.data('pos');
      return $container.attr('data-position', nPosition);
    });
    $('.input-txt').bind('invalid', function() {
      return $('.container').addClass('error');
    });
    return $('.input-txt').bind('blur', function() {
      return $('.container').removeClass('error');
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTs7O0VBSUEsTUFBQSxDQUFPLFFBQUEsQ0FBQSxDQUFBO0lBQ0wsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFFBQUEsQ0FBQSxDQUFBO0FBQzFCLFVBQUEsVUFBQSxFQUFBLEtBQUEsRUFBQTtNQUFBLFVBQUEsR0FBYSxDQUFBLENBQUUsWUFBRjtNQUNiLEtBQUEsR0FBUSxDQUFBLENBQUUsSUFBRjtNQUNSLFNBQUEsR0FBWSxLQUFLLENBQUMsSUFBTixDQUFXLEtBQVg7YUFDWixVQUFVLENBQUMsSUFBWCxDQUFnQixlQUFoQixFQUFpQyxTQUFqQztJQUowQixDQUE1QjtJQU1BLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxJQUFoQixDQUFxQixTQUFyQixFQUFnQyxRQUFBLENBQUEsQ0FBQTthQUM5QixDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsUUFBaEIsQ0FBeUIsT0FBekI7SUFEOEIsQ0FBaEM7V0FHQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsSUFBaEIsQ0FBcUIsTUFBckIsRUFBNkIsUUFBQSxDQUFBLENBQUE7YUFDM0IsQ0FBQSxDQUFFLFlBQUYsQ0FBZSxDQUFDLFdBQWhCLENBQTRCLE9BQTVCO0lBRDJCLENBQTdCO0VBVkssQ0FBUDtBQUpBIiwic291cmNlc0NvbnRlbnQiOlsiI0Rvbid0IGtub3cgd2h5IGRvZXNuJ3Qgd29yayB0aGUgXG4jaHRtbDUgcmVxdWlyZWQgaW4gTW96aWxsYSBhbmQgU2FmYXJ5IGluIENvZGVwZW4gOlNcbiNIZXJlIGl0IHdvcmtzIGNvcnJlY3RseSBodHRwOi8vanNmaWRkbGUubmV0L3NqMkVtL1xuXG5qUXVlcnkgLT5cbiAgJCgnLmlucHV0LXR4dCcpLm9uICdmb2N1cycsIC0+XG4gICAgJGNvbnRhaW5lciA9ICQoJy5jb250YWluZXInKVxuICAgICR0aGlzID0gJChAKVxuICAgIG5Qb3NpdGlvbiA9ICR0aGlzLmRhdGEoJ3BvcycpXG4gICAgJGNvbnRhaW5lci5hdHRyKCdkYXRhLXBvc2l0aW9uJywgblBvc2l0aW9uKVxuICAgXG4gICQoJy5pbnB1dC10eHQnKS5iaW5kICdpbnZhbGlkJywgLT5cbiAgICAkKCcuY29udGFpbmVyJykuYWRkQ2xhc3MoJ2Vycm9yJylcbiAgICBcbiAgJCgnLmlucHV0LXR4dCcpLmJpbmQgJ2JsdXInLCAtPlxuICAgICQoJy5jb250YWluZXInKS5yZW1vdmVDbGFzcygnZXJyb3InKVxuIl19
//# sourceURL=coffeescript