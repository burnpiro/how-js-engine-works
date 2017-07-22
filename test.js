const getPropX = obj => obj.x

for(var i=0; i<10000; i++) {
  getPropX({ x: i })
  getPropX({ x: i, y: i })
  getPropX({ x: i, z: i })
}