class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = [(position[i],speed[i])for i in range(0, len(position))]
        cars.sort(reverse=True)
        fleets = []
        for car in cars:
            fleets.append((target - car[0])/car[1])
            if(len(fleets) >= 2 and fleets[-1] <= fleets[-2]):
                fleets.pop()
        return len(fleets)
      
