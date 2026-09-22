import heapq
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        pqueue = []
        freqMap = {}
        ans = 0
        for task in tasks:
            if(task in freqMap):
                freqMap[task] = freqMap[task] - 1
            else:
                freqMap[task] = -1
        minHeap = list(freqMap.values())
        heapq.heapify(minHeap)
        time = 0
        while len(minHeap) > 0 or len(pqueue) > 0:
            # print("Time: ", time, "Q:", pqueue, "heap: ", minHeap)
            top = heapq.heappop(minHeap) if minHeap else -1
            if(top + 1 != 0):
                pqueue.append([top + 1, time + n])
            if(len(pqueue) > 0 and time == pqueue[0][1]):
                # frontCooldown = pqueue[0][1] 
                # while time == frontCoolDown:
                heapq.heappush(minHeap, pqueue.pop(0)[0])
                    # frontCoolDown = pqueue[0]
            # print("heap: ", minHeap)
            time += 1
        return time
            
        