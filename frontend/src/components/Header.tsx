/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";

const Header = () => {
  const cartCount = useSelector((state: any) => state.cart.length);

  return (
    <nav className="border border-t-gray-600 mx-auto px-2 lg:px-28 ">
      <div className="flex justify-between items-center  w-full p-4">
        <Link to="/">
          <div className="flex items-center space-x-4">
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJub25lIiBzdHJva2UtbGluZWpvaW49Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg0LDQpIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyMyIgZmlsbD0iIzFlODZlNSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L2NpcmNsZT48cGF0aCBkPSJNMzIsMTRjMi41NzcsMCA0LjY3NCwtMS45NTcgNC45NDYsLTQuNDYxYy0xLjU5NCwtMC4zNDkgLTMuMjQ3LC0wLjUzOSAtNC45NDYsLTAuNTM5Yy0xMi43MDMsMCAtMjMsMTAuMjk3IC0yMywyM2MwLDEuNjk5IDAuMTksMy4zNTIgMC41MzksNC45NDZjMi41MDUsLTAuMjcyIDQuNDYxLC0yLjM2OSA0LjQ2MSwtNC45NDZjMCwtOS45MjUgOC4wNzUsLTE4IDE4LC0xOHoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgb3BhY2l0eT0iMC4zIj48L3BhdGg+PHBhdGggZD0iTTU0LjQ2MSwyNy4wNTRjLTIuNTA1LDAuMjcyIC00LjQ2MSwyLjM2OSAtNC40NjEsNC45NDZjMCw5LjkyNSAtOC4wNzUsMTggLTE4LDE4Yy0yLjU3NywwIC00LjY3NCwxLjk1NyAtNC45NDYsNC40NjFjMS41OTQsMC4zNDkgMy4yNDcsMC41MzkgNC45NDYsMC41MzljMTIuNzAzLDAgMjMsLTEwLjI5NyAyMywtMjNjMCwtMS42OTkgLTAuMTksLTMuMzUyIC0wLjUzOSwtNC45NDZ6IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIG9wYWNpdHk9IjAuMTUiPjwvcGF0aD48cGF0aCBkPSJNMTUuMDQ3LDIzLjQyN2MxLjg3OCwtMy42OTkgNC45MzIsLTYuNzA1IDguNjY2LC04LjUyMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0yNC4yNjcsNDUuMjA5Yy0wLjkzOCwwIC0xLjY1MiwtMC4yNTkgLTIuMTQ2LC0wLjc3N2MtMC40OTQsLTAuNTE4IC0wLjc0LC0xLjI0NiAtMC43NCwtMi4xODN2LTIwLjUzNWMwLC0xLjk0OCAwLjk3NSwtMi45MjMgMi45MjMsLTIuOTIzaDguOTkxYzIuOTEsMCA1LjE1NSwwLjcwMyA2LjczNCwyLjEwOWMxLjU3OCwxLjQwNiAyLjM2NywzLjM2NyAyLjM2Nyw1Ljg4M2MwLDEuOTQ5IC0wLjQ5OSwzLjU3IC0xLjQ5OCw0Ljg2NWMtMC45OTksMS4yOTUgLTIuNDI0LDIuMTc3IC00LjI3MywyLjY0NmMxLjMwNywwLjM5NSAyLjM4LDEuMzQ1IDMuMjE5LDIuODQ5bDIuMjk0LDQuMjU1YzAuNTE5LDAuOTM4IDAuNjE2LDEuODA3IDAuMjk2LDIuNjA4Yy0wLjMyLDAuODAyIC0xLjA5OCwxLjIwMyAtMi4zMzEsMS4yMDNjLTAuODEzLDAgLTEuNDc5LC0wLjE3MyAtMS45OTgsLTAuNTE4Yy0wLjUxOCwtMC4zNDUgLTAuOTYyLC0wLjg3NSAtMS4zMzIsLTEuNTkxbC0zLjU1MiwtNi41NDljLTAuMzcsLTAuNjkgLTAuODI2LC0xLjE1OSAtMS4zNjksLTEuNDA2Yy0wLjU0MywtMC4yNDYgLTEuMTg0LC0wLjM3IC0xLjkyNCwtMC4zN2gtMi44MTJ2Ny40NzRjMCwwLjkzOCAtMC4yNDEsMS42NjUgLTAuNzIyLDIuMTgzYy0wLjQ4LDAuNTE4IC0xLjE4OSwwLjc3NyAtMi4xMjcsMC43Nzd6TTI3LjExNywzMC42MzFoNS4xNDNjMy4wODMsMCA0LjYyNSwtMS4yMzMgNC42MjUsLTMuN2MwLC0yLjQ0MiAtMS41NDIsLTMuNjYzIC00LjYyNSwtMy42NjNoLTUuMTQzeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIj48L3BhdGg+PGVsbGlwc2UgY3g9IjMyIiBjeT0iNjEiIHJ4PSIxOSIgcnk9IjMiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgb3BhY2l0eT0iMC4zIj48L2VsbGlwc2U+PC9nPjwvZz4KPC9zdmc+"
            />

            <span className=" text-2xl font-semibold">Reserve</span>
          </div>
        </Link>

        <Link to="/cart">
          <div className="flex items-center space-x-6">
            <FaBed size={30} />
            Reserved Rooms:
            <span className="p-2 bg-gray-400 rounded-full">{cartCount}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
