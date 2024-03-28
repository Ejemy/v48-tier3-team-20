import { CATEGORIES } from "@/lib/constants";
import EventCard from "@/components/EventCard";
import EventList from "@/components/EventList";
//import res from "@/app/api/events/getEventsByCategory/route";
import { EventType } from "@/lib/types";

type CategoryData = {
  id: string;
  category: string;
  event: EventType[];
}[];

const getEvents = async () => {

}


export default async function Events() {


  const categoryData: CategoryData = [];
  /*
  for (let cat of CATEGORIES) {
    const { data } = await getEventByCategory(cat);
    console.log("LOOP data", cat)
    if (!data) {
      continue;
    }

    categoryData.push({
      id: crypto.randomUUID(),
      category: cat,
      event: data.slice(0, 3),
    });
  }
  console.log("catdata", categoryData);
  */
  const response = await fetch('http:localhost:3000/api/events/getEventsByCategory', { method: 'GET' });
  if (response.ok) {
    const data = await response.json()
    console.log("fetch req data", data)
  }

  return (
    <>
      <div className="flex flex-col gap-2 bg-lime-200">
        <p className="text-4xl font-bold">Categories: </p>
        {categoryData.map((cat) => (
          <EventList category={cat.category} key={cat.id}>
            {cat.event.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                eventName={event.eventName}
                date={event.date}
                location={event.location}
                img={event.img}
                views={event.weeklyViews}
              />
            ))}
          </EventList>
        ))}

        <EventList category="Test404Category">
          <EventCard
            id="Testing404Event"
            eventName="Testing404Event"
            date={new Date()}
            location="Click to test 404 event"
            img="https://picsum.photos/id/1/200/150"
            views={0}
          />
        </EventList>
      </div>
    </>
  );
}


