describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles one element', function(){
    expect( bubbleSort([1]) ).toEqual( [1]);
  });
  it('does not sort a sorted list', function() {
    expect( bubbleSort([1,2,3,4,5]) ).toEqual([1,2,3,4,5]);
  });
  it('sorts unordered list of Ints', function() {
    expect( bubbleSort([5,4,3,2,1]) ).toEqual([1,2,3,4,5]);
  });
});
