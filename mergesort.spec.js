describe('split', function(){
  it('splits an empty array into two halves with an even length', function() {
    expect(split([1,2,3,4])).toEqual([[1,2], [3,4]])
  })
  it('splits an empty array into two halves with an odd length', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2], [3,4,5]])
  })
})

describe('merge', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([2],[1])).toEqual([1,2]);
    expect(merge([1,3,4,7], [2,5,6,8])).toEqual([1,2,3,4,5,6,7,8]);
    expect(merge([1,2,5,8,10], [3,6,7,9])).toEqual([1,2,3,5,6,7,8,9,10]);
    expect(merge([1,2,3,4,6], [5,1000,2000,3000])).toEqual([1,2,3,4,5,6,1000,2000,3000])
  })
})

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles one element', function(){
    expect( mergeSort([1]) ).toEqual( [1]);
  });
  it('does not sort a sorted list', function() {
    expect( mergeSort([1,2,3,4,5]) ).toEqual([1,2,3,4,5]);
  });
  it('sorts an odd numbered list of Ints', function() {
    expect( mergeSort([5,4,3,2,1]) ).toEqual([1,2,3,4,5]);
  });
  it('sorts an even numbered list of Ints', function() {
    expect( mergeSort([5,4,3,2,1,0]) ).toEqual([1,2,3,4,5]);
  });

});
