import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import HeroVideoPlayer from "./hero-video-player"

export default function Hero() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="w-full min-h-[80vh] relative flex flex-col justify-center px-4 md:px-8 lg:px-16 py-6 md:py-12 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Poster rendered by server — no JS needed for LCP */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="data:image/webp;base64,UklGRt4mAABXRUJQVlA4INImAAAQCAGdASqAAqsBPxGEuFasKL43IpSby8AiCWlLcnRtPM2nUhlZqqPFzA3a4kHvk+MfzHucfzGza4b6FyeD/J8E/2PxF3rdo7735c+GP2w2CH8d6iXlD+GVsvoZGR/JS21iYcC/WlosucoNxqt924hHCe9kwtGivhEYAGiyyF+4izie1pLUCmHyc5bLPbn23DNeZdJWs3N8MWAJKFqSagcfDB1VjeTasIf1U1OJc0wR3HczbP3Py3/inzHjq0Tm8ExqOUaFd7+CoI8qyeS/PP/rJtZ8EAmdRMr6OD3zOHigTcsndN9zCbyf7L5nAVCa/HbgHmQ5JQ0wenQyKmdgiGBqot7Pa47Xkv1OX0i2mz+8K2l+4zlsKN0rus/LKMaDtam04QEbPQbYIrvhWUAitXVFSCCTleQT70//WQaAJwwd18ON6+shR0IYntE2ERQfWkfOuZu///ksPJ4yu+Zt5WZXG9Qaxcf40nzK3MW8n+ZILPhJQr7V3J5VeWPbB8/EpinLJtCp0Jja/yxzINPnmEqemmnDiSFcjwJBromo3tDGcholMy4uhMJFgeoCdzQ9G6sEdztF9K8t030BTKrGF2BvsOI1lM+4tatFwer16AHf42oJcgTZDDR2ynQJdJ+e2fJoIVZ+oAhNOKRozNXFVjwiaOH2YchXbnMcb5EEAEBV9P0wF+64jx8qG0u3Bbm2nVIsz7DsX4TNstMuozy7iCGzOqyuQ0sPMsQik9yT1jayhDoMrShkioU+LePiYndH8BZOhiwl3qpaZdM4eGpuGpyTu29jvh20hCCH/EMZAH/PQLd5O89LSN53W0xkOLPImWBydh4z5W0r8aQwrCqELUM2F461RM48t4cPEjXLv8/KszpyNH9JRQiWubBvK2cNKFrQModqgyUwoCwxl2EKos11C7y/+3r97DuUdYe7SFEwX/9Ku7oqQqMPVSCk6PrdlXTjf8sVTOZ89nBP2p6AmV/8K74H+jFeuwL61qFB4dh3nWTnxlOEXsEzOvHdKNANAY2VweZSJ1CfVYgAVfx/U3gpP3eyvjaJSl9BRz1/Dwm3+7iQq8IDmKu9uQ+8tk6XTwJHcAf4FnyRBIsaUWGw9aOwzkwbdrxD9bq3lcI4a9cSPHb8NuP2QKt6yZJEtTsYG5dg8dwP83VYnWbjOyguUmlYzC/d1Wd30iAa51Hvh2rcI5KyHEb2Bl+Pa+nNTFxNoyXM23sgaL9u1d2f+Y60r90q5hIVB6v8pGODUrvnR1upIHn4q9xw4c2Vey/igNh655lQryDVL4Ylgp/+W8hRsW8kUgpOsTLZqFLtYR1uCJvhenUN+az0PrDuZ/vNQMterTkKpXAlOVSlNCP7SyaYr4mfjToqW8BDemYEVBBcqXXpWfaddqijdu25SklniHtHOdHCetx41J4ZiFyfZWvZYa3HhB5p810QK9MeLJTzToVTqu50i/ECWUXx5pczEHagNyYtgoUNHr3JuDH18trYMV1WoToX1sBWGJsTHjlqEvZbxYl+JdigvnClewuWaOCkQEUmdtgYYpbR7ge0TuTzXbNA1A94pniCwwdoTNx7ti3lyZ0ksdM1ptb6nY7B4ck5ZU+a6YZ+RCKPlANCtUsrnSXynYt/iIqDZodvb35c0A29GmDidgl+738pTAwG6BygqUaj4TnIRocgnfkI/H9t7BStp7qCi7Et2oUMo31bD8L8/3xAqr44x0tMuEq/spz7pYPXKYi9RnZ0F29an63hld2DuqRacxYkb9irQgqII3PiYAyBsMTENgkrXPyUMy7wN+SNvgY0/KjXavbhBCYy0iAkMD6CaY3yjGy94bUYpk5nB01o0PVVVhhv8eJximAevDcomXN5V8UkJL1xec4XckBOiX8Nb3OFLt2AFdWyYfvnj/zUth9PIggL9gznoIynRk2eR3A8HA+Z11kKCIFSr5YoSspuPgB8HTsrFQdaxGPSwjzgMP9vIOXksGJAeuBaiQpObktt5Nf3fz144KDX84kk/scNQE4FpmN/l1TEqxw32XvsHhZB2g7G6AYPIs0MD1dud/C9TwwNX0yV/1WF38xC1jkDR3M+2ZgAC/5aO/w60z6u1MKQaiTIfi/gRiL1dTugpAjXqbalaPT8wds357IFulHMKroSocQureUrhM+x0MmP1NedP5uLZ+9prBSIAgsIQCIgkOlyv+AmMZOHswdEmvtNEoJBhZqj1EgYw7WC1uWbRW37upWpF3aw+IFJKvbQXd7R/+Otsj/94v66e8C2zhFo1QCdSrdNqtGerutEFnOgwT9CozsUpMAJtJ3VUtlNYJUFCFdz7XOgY4EVGjdr/pk+Da6jlvYxjxPVfoiyfHT/S/vJNfLxNt9KktbFKsSvaUNJ1vXoqShXYp47cyJlu7vUEhIHAh3wz2oJ4D7jJoWFeqOfnsIrisFraQ57tiazXA+fOxUpGfICtIWHB3dluwNgRXCOGNaULtRdzjwA+reE6c8/KVamkseCf//UQaFu4+K5bAl6SD453Lv9oAexnQH5N78z9tpxIaZ5z4C5dvSh4UWChdBperNB5KQRbKt4PMe26RA5urtNsvLLoyISyPtmizDJipnEXCpuHUoZVFLYIvHUgodV6fh0cbb+ZUf5Alx5/GHtb8DHCVcKPLn069hB5KPAXbq00clliZZWtBLUHIn6QzkQsdd8wXxWa4YyNm6hUvVFxBagScf+qImr/DVFL6C3VDx3UT2WyUNv2YGug8ZDd3rEFfa3CN4cPFbMPigEH66JxEdM2CGEv6sExnjt4fL3Ufp0TOLCXIDTCF2Vb/0Fv7HlNYKFv2Gi9YW8uv0jJqm1UAAA/ta1GQMMkq4CwLSRJxmHjXiMtQeXwS/4vyplQBarcWTH/auDM7Qs58DkBjQRuCOPS67XlSSXiV018SKPyEK7aeWMGn+TngduTgr2ijPbZGTnBYroFJucI1+VVnstuI4yZWLQJtTa6RK3VmNO1ZxbqK0QeHDbnOuGKA8OBMGpazSMDjS4CRwMYFGAy8jz7y76Txs6TCaVb78QpK1yaCIpMtYXuVFpSITszomm21sZSnU8mZ7MnFw9qaqhSN1J80jTpfb77j0PkgayJGZmhxl14qZHMS+Ru7ALE1acVIN2BUyFmO/MF0P/WeB7QeQhNQRSVFUg9syuwDtg69yYzmMK/Zm/7aZVMY3If5nBfEJZQsT/fKp9EyebGcXH2GxE4L79xpZcXYXtxY55mNo18romsj2hUKwv2qz7gU3nYGCyvcOWTzJlOBezamz0wYw1sNfYIAYNA+jrgIBKfUzuKM9mHu6B+lO9U/OeFh/eRz/7fux7UD3uHPWWk/zwXtbo+JA1QEz+DQYy7Da5Gna8n3mzUr7F7lixcz0883XOG9LxLBuFkEKbzbTYJDY1kouj20xRPGOzvqo5P/MSHXvEqnYWeKIlFQEQuIRCaxYSksSHEc4ciUeL82YPTmjoDXCLcT6osAOe6exSG6yPR7Nm/NS1mDRETfM8dSsV6ax/IE/rsCBrIhShmzdRPbVNkNdAe1ai1fg6B3I4mEZwxlefLQJU4QxcY1n8hDyiBnPH6Hft3cO5c7GRoVTAq77R4GV9SIGLeaXu7CNWmQhurwSX4myPG+zRpPRGs3nXNV/4vl4k1Vtve9gjh/fhm6nxOL8qpvRlKtxBXOpabohW7UxpHFOYJgEzk+lAlnNpT3w5ZNWRf/VW8CJe+3UEOsXI277da/ikKU1exWVqe+W9EXyt2J0CmlQeuVMpPiY1xm+wWpdGyF/jdA9aRRhgz5hmFeNDndXHKsoZS4GixMJwKZ66ZEhHCXI6IXlD/dRnILjgKn83YgMwTKk6OlcM35z2Djpu7M4fzqwklFt+xVVdEyUpO0ysiWibLXlfDqsOvxA31caaUAUraT4e/7BV2Y3iCa7osvOaAkQSF4GXbnDMf50bS2befpYKL7aOZ4zAlfd2d1V5ZQylof+/VT1pJReV4QTa+2IBHSxrKeEwG7BjP8YU/jqzPGN5OXlG4T9UpPglEo8NE8nNPgltyKJlPgwDvNeTEkg5yi0tBKinCisVSz0CxVUF0S0NlG69ufcPz7tMvxuPmZfgOWfsOKD0HqQCC/GuTZxRPtZh2HdcAwfoGYyZku3mV6zA0yUTvZYYS3Mb5Rtc5avjTatxbEIQUEiC7DuFbhGe7Trr8fnJinlZF5EIiMrj0IROs54LKo4rqd2PFISLWphV+nT8m6pQDvkcInmS78nJJNEbGjzrANhz/kt9V2Z1SpO0obm6Dq4eVt+6GwkvM1jl08A6TqRbGjl9VyqCka87841RloJyxLIiVeEM/gw3rG6wA3j4re3ma8+88eFOTbstJCyKHCEcGCiXCNHyXvV1lR3XwmfK+GEdnuDm8WdEkQ1fBuhPpfQ3990kAKL7oKcQ88eG8v+Ws33IbrEa2Bkvf+JBhqxrPJJBeP1hbcovlYK6MW6alAJs16A6ocJRqtYaHmNFNctl4EUwd9Fe+b95js1Yk8h9qt3182tsDRk5RFQlw5S8VRZkl7QkqT+Qh8hCLvkBD5liCn9uvX5/1qFmfZnJdeuO/MXMFOAumHl5bwHtm2HJLxHuAcrGnx5Wv+LBZQjM56DdqGvZWGT3aElY/QLY5R6Ig+bO04id4quAxYAMYJDq2yqBLO3oiEyEEcfIR7oxzoXn5n46NlH6dDtL/OrCIcEEczYgy1tLoUf1NVvnJlPQZMfuGUlqUZNk4Zm6DPAvCQBkfmHfQmwf2Io5sHXu1lk9XkQ/5rsNba1Z6jvtkHmJIl5VlBYBTeQYSBnHD7EJAD2K0wjx7ufWHukX2gRCPGtDhN4uvIVjB5pXlUdx2TO2lIK5NssxK5fQkjBAB5ZQ5J2mN+jq0mr/yEdpJ7ZQGJ5JlqGyemTkEifFxb4urp4sCv3buDyk64q/XIMBFD+7JB2Xy+B+2QW13R2CQq5WLID1BN/Mhdu6wctjsI3GV+zVRIa6Ic9unZi79Na7UtYWzHmMJkqcr9hn6uTxgOpTCzi6+Q+a1IzMcCAMBxwwHhqfJdqufKP+rO4Pq+oVWAHi1FZ9efctiYoCVWCIG/mjG9ulhquUHGcWkD3j0YR8Ek/uyms5wP+7WgkX0B/qcRCCCKpqCFs/QVLbjslq9vvr1bs8AWunXz9p/aelTNOLR8xcJga9cgKYRXWQjEt9Rbcmhp6deNyeIguRxSLAWiYzFOFMdSmA4DzrZlYvk/2sagNnPYjSZYa4z/zS1NfRpl+VBRg6sNTButwEBSLFALjrQgjSDrJQbQNoNt5jsxkkC51Rn/C/HOkTRFKZeRvh45dPn2eeQqB/eGLpzdfst/qjxY/P72Z03bKSXdqICdZShOH17kHb12oVPf1zE9tvKvep0mkUu0BUdI3DVBPzeYSG2j4gXmJ82Jn74NvyLq6JGzgpS/IplaVmfUfyLVdUzJIvxD2b3sB8KBU17JZa1rAO05dygXq3PPwkayDadL8RT+kvjFSim9QBQGA/AwkT95KTooCTKVzz/+yaYKwlNtWGCnDq3ox9RkiDZL+ERKx7TeqVUhEpiFqIJ/eqam2ERyLU9k/TIYR5v6VItwgPq2CG3RzSw4YM+Ns8z8+j6543AUUjjwqSAwSHIIZyPOou8S7HNhM5oaaYU6NcZfGCS4RraYlfvWu8Y1Z3N1Qq+P/hU5/16txxYXDSf3qaCd15NLxdRvlprSeXjyvXo1BIp1UEZrEGvYGecwLO+uq1dIbRwNg+gUPdKry1+YZaXpvuRNttf6oErE+MZ0FBoqchdGfbBYl8TCQaazUs5fUG7C4SmJzO0ZMCSWdsan3GcesDI5k7J49WMt37a5656siNkUXZ07GgDySHHS0rkv08aLFOaBGumfsEW+8/1NO3c0wEg3Q8e7XFeHYYKsVidOdwmb/qIjAXG6FNmNnzZh3uoUXcVHG9XBVTq1vA6QdCLMTRiFdcZIIW3wDqyUNouRss/oCYJpIWGMQe7ytXNVg1tcQr35ynOLiYOnu61G83hD+f/HU7R+YosiJsOVgb4uSz20mZ8hX0U3GH+TYN5tsaEi2AcwsEt5v1BjWc0kHk8A80UXmo0LnQjZ0iFyH22jdqTvGWqwQWvB3d5D+PlpkUCFiJwhK50FO+PgCLjCkDw8kDayBkT58JYm+X/+MNtUIe++PoVqgQPJSgvx2L9aME83K3r6JVkFt3nWSaoHZhL647A/+S8v4ek1P3hkri4k2pP2vlmKJpxXyR9Hppl7xQe5GRhf4SvqHzIzQ6pxxet8wedoOKwToDJSnTnB2zmPEyjfQP+t7lTOGaAiGVGIBF6WAAyjwSCSNBJdJ09WBBaelB8KyYzDFM62aQ4WDE0ywXZM4uaARSbc3y80QRTLMyYlBk78EhyLJYxCRRCmU85bGuPmcvd4t01yeaUB+nHA1B9ZghMqKg6mETjNCWGSxgbCOPP7RJMqhZwk6b9GiveRlTvpQ97hIT3o21qfffnKXM85AppQvHN6nJujkIxuewNRCBBaNe1zDzEoCfo/kAv29CXMlRibWspPaMmG757Zyj9Lp9DIvOiCPayTA3kMKbuA/3FUXtd+YgIW0dp3eclYX5yp/ydAFmRVmXPZoObAdlEn9oQhxa4cBgC+ogTo633cTRQsHY91fVLjjVTD2SBbflXPezCA3AOSjM+tmtqp/F+Aym++u1fzqQjCMfH6OifQ/Indps6F8HdO5JPXBhdNfs+s7kVzA4VRqWmFlJ6N20uJjCU8K+Udthi3ku1R+2Pq/6J0xYvZosdneB/cPhOn88tY/ItPfJS/LOrnJVzWDVe1nGE2wHj/N2gclgRUuG42ZjwRI8FRa+NHkLcLpq+E/WpS1bP+IMrv7RFE7Rvlmrh8mjU3vkM5fwWjzeC4xM8zko5TzUAS6gsLblJCMtIgJMD0+GDBGbVFORACce+ObMCOt1JhhY2ikgomoodlWz5ErDKrxZ0yEtN2xagX8ahLu8LwFe+zYkqSSFjXHwsxNvleJuEcijyUYA/wAV77p1QZlj8jJjSNl9zN4Cs2uFvbsA2SU0tlq6Q/GG4AGvbsKkPy0B1rqeEc77hpbjYWWFOyr1iTAhIaYSRnijEvtez1cbofC+teuwhe5rR95X0SV230yPVYFgUl47cTvPXpmOzBYFScbmOol5utzWcl6zHQF+xqqa/cHzZyLXm7b2bBQn5c+t0+pCE9O8+3wrvdERZDDqmlKYhK2gnF42LrK5q+fj3WTXVJgAXE0PvFDU8WeZNrP4V/3Kd9LBBv+DCcpf6nCDUspXDpQcnVmN0hGbIau2Aloar4BPdtQIE3PIBwyFiyI5bPvbkl3SXOgJr1rlhpxNBEuGckKN9C8nQAlkIee+IdqENo59/DOoJbg33UaIF43ui+d4e9CpdmrD1mVsnpeNrKNa0hvc49m3FtAFSQDej1z6z26G9jJRAulD25Q7k6r1VNB7PNTDKtfNj3sSz9+H5kKLbFlYUx+QmPw1aSwPy8acN93W1tlvGrajsNkyG9jrSY756txDyNKImnyRq7mkrBh+DRQXIhmLSFm9K5JM0l/KMLa3SQR12oKt8h1+e+/OHuj2a9N5Xn7OL/z5TcKGzAt258uRSwmPg2HVY2F0fKV9A5XpzPium36gVH6bALiC+FtlM+roh+xL425akeAV/u/6wDkh2ZA6W8FABstdP51IUxa0ngJr3bi7oA40C5xd1dni3dsjBM2DRnEhT/rTV6R6h2By5mjyE2/tCsIcIYFts+h/BjFsEF3yOGRyRWQXp2Ba+ojPkhHk3GItCG8nMlxntNLU1222iPN8Nvgp2DP7gr9WUi36HV8ovneIsqWjoRFEOADnjago1nEP3hPaROUEhG3Rb9Y3c61aM1NDnY7CaFjMDBfnwovstTvxyl48t6xkT4/mR8NnfnvmM3TRtXi/caJAkf59lNtu0w7wJcmuDEd+bhmSiPNF2Vv1t6P+ZausWVIxF1iYQCVhX+HVkfomDSrTVtupOpNpjnm63PO251Qr6fDoJikBIfGbRkrEmNAGdk7hgX6+GMrJp5vBMHd+UqieQzWPCl7q4Oz085wEBnAH1sUc5jn6EUbc7ZXCEO8XRGWmRlxlRs8J/7z/A0rN3beA/28uYOKAp8vt2FRZssfW0P3bsmvHTnC9YCCl1FVR5e0orkhBRHndfere0lDAWqkLUKFwrfFS17i7mtFkWJxr6NLR3aKICakMcVrZYMYkpM5P4pdj3IpegbR7tW8z6I0JfOjuW7Ntj7hQIDfZS3SHaVAxJgMqAjHxWrEOShczsCOsJLqatyhK6ZELdRQB+rF4N14W0ei8cfNa0/QmzbAoA+636Y1IXYee7FPGal0ULDTf+6TmVWoI/sN+Ehvn/LhButoiVHA0+AqK1X1L/F7shogStz6e4jP5g/GBZFYFQw2XgK63LpY3wtgXSOtyETy0kPYAw5cmUECGlHiXSPuM+AwGkQB5q2Me8QbfNlf1M1Fbfr6MrJBqgvSq3BzL8P1nw3eLZAXQqzLaRD6eIdOOXe4vqcpx6MYonxKpameWze9+zqgRrDRTNyMiPsqaMt2ssoFwfb1+qZ9b7un2CM578DOABj6VrXlg5XjatlPMwFesyFla9va7LXwHanV5KqGABzf2L022KILbUXRo7Tz2ML85FUefW9UNUt/w3pLw0lpy8WMHbd6OSKhd5XZlbCQ42dWqCOAdt2do04YPQJJIZb8Tb8K00W4KK77tkm8Greqg2zsgh46xQP2sycDvhd8K2QiZLrNrZ+CH6cp1DCB8etgzd87XSyuyPaCX7tCHNbKqbKnzl+8hBTO4ZdqhiBJgnwW7yTOA31mPCrBKse0BM6+jvxupZVL0v5QPsbS0PRIBUVfitdDanXqgfPqLzOTRY4oYz9TElxzHpnsAazCDFRm5TQ4cJ6UdPyIQPgxGKYzLdySjhYeysaxt403TUzUlV1b1bFWLXk/9McT8+ndDqbBZojVFLMkBIoXda/avO0XAoxgbSNkVzX2ZSMggeOJ/Fvtc28g0lrtU78JfeeBRGjSB9QlF+FHI3ZH2LokZcAxOKgxabld7YxcgEtu4D0wnwzGtmPKa+edhZo+kW426RyK/3xvAgcrgD58CEtXOhYNMCVqaUHoodfy6LAObpd5vd4K5CMCaGzp81PeSiPm5fAAYj4r+ILUokAKulc9Egr4r045uLeoI+ke1T1ZaHi7dH9TpAlqoKcsN7rp766K96SVcX/5OOoCqICJyFyG9YO/Qt0AtTJqpz5P5ZrHkl6yRSHBZYz0Sfo2IjqYzRQnQ1T5+jlt5cQEBFbqQQ+8CF/82I5TRyqaeXmvkBjhm2EjcRuCckT9VrWj1BT90WE3WqGg/UK8T9M0/oyfLhmXtDfY6OWY0WeQA9jpJrf2MfJlJTOIwbvc6HeEkxuZ38QWaj00iH2/Rw4ZSgDAd2Dve/7+lX2cJeEh2O4WCOfu5yCcbpOw1cMiZCIJh3EOcScL+7b8kC7JtCCS0Yp4fU/eypmUOY98OLgQpxMFA3hzk2PXTipBOT/hkSnlNY2Bly3OBe92SxdMWhHWKpi4dTX+H47CmBYQJc7k6k3pxPA9x+1xypzIam3ybHWMlmaD+U4jPpPkOAvCVzPMApMJtE6SBmOIx8LB2vSTXnglgzDnF93yYBJCYoV1rgWrnLusTkC298Q6NJ9zfRKtytgJDXSHpUfDIfbm2TjhYR1G6Hpx7X4WqmgDBxX8tCkoMipaW4LsmicyHpJ6m3Nb8GZky2iDokikDwobko8TTy8aGDdCTRllzwYmrxUzLpkUtXpllhXpSxcZ2+670nD5H13V91OfCCPCauJVdxr1f08rscdFQJhv9its/t0T93U+9lePk+Lot4o7AHvH5Q9QM5I6stMwlr7aI1HyAtm5h9LQwIYbsHOuF5p8H7CsALTATV34e0YOWIAbXvRJwSDvckjmAWJgyR3PuYxbIHecvB8L2Ifn12IVnkzDp1lt1DjLzBxdshFNI0MrqWmuxyiRl5x/XBf0m/EsDJph7f3XpUoQKzS/VvosE3uQo3GVr5T34jnDUF2P/AkO1/Mi1230DAuDRnPAk/ljMLS0Zrqv0kN+wEjhfZbxucF0HjdGjgS99otZI20tsDuDhdtwmxX10DMdj+Pra30hdn8vnctwXw4U3a/8GFcHDT0STh3BE+1HrPIGYwpSyd7BdxtC0l9Coz/TRJ7TWfqu9j9SPr9bjy3t65bBgYrOIsWtOevk/PGGCrjDT3F+teKFr2wlQHqNXoFNrfaN6xkubyw+q8ac5jiy2Q7mSGSrby6YktsZWUUmXK+vMuXcM1eVoNC2knDnM7OaSoNYOWeO9aw+iGYk0eBf/Ang3NnhUfWgwTi34DwZR0MtYvuK2z0gt0T7eoVJggcM6NmNjdK0qzelN7iOhV/0C96AZm6e/kuoiwsJLKXl1+UZdEJyZW0zIaMDydX5AurcVICZKTrlJbtHiJNC31ZGuecU2S29j4Eczc9IUCv+KULGz0iBeeNTi+kpYFAVPz0fAwq5BTtG46cHOnqA0vuKfcXUQrgjcSn5m2lQYIA9ZA2F0cm51SdtgL3Vr0IVn6Esyki68uYpU/NcTq6i0lCCKP1QYMZmyL1rywXqe0OzY/3d3R7uDZcVO2JYRCnB2Pgp9rBhKMQY/vPBhwk4gM23m1hV3ZUgX6YoUB5h9EJF/WL3a+QVLNWQmaDJJeCr0Q5cT2/QWqjShI3Gilm8Q6te6ocSZXo7ce+v+64GPe5BxJpc/W/O5agerEoj6lyN4wqSwe0LBhpxJTyunFKBPSXh6l/6niHvxPRcwLYJv3np4qGZg/2oYKE6UiU0lHCG8v7qNSENfu7MBHrVhBcftEc+g/KtVpzj6vFIBECH8s5Cs8uMIp95MjHpiNoD++CfCn7H7ACJzP2z+FU/P804esjDVslo/UrtH7CptlQ+FvF4aqV6Y7oH+m08SQWeqf7N/AMtL9MS9pT+oqVOurUPtC5gUQsURAs+71yURKRyLfoGkb7d2erY0j+G6wj5/NPHzdv0ICfkZrr0B6kQe2E5BnfiHZ8NHHWtSvtuze2We2wAOHSpTdfrnZTtUcoPFLagYY4J1a8LL9gVR58ncz7pCWqBYo2Jl3yaYV3KIi2D66HZfDF8b/A1cvNVjQYZ0PfgaGBuPOdivd1R7h8hNMspv3uN+K5rSRRVTrNSqSaMX1XVdKb478jt5MC3OAOrHDEUA8WIJRcj+DJSbBuIUIvQXg+3hRvnxqm6pym3etnLzrbl17mw5mtQPl0Nykdmgsh1az328DuvSxvk+KhSV5oDx0jTcUFM+QQAvrde4AYIpuYRNgqVRnpSIQVvGGqb4mTuQ9gOF00UgCsh0QLw/ZV1YVpoM+iJ36plQcZycKV98nTgaF9vwM3bg6YxcUlpLZwWXfryHrLbrwClJDEe1OZ/gRoIyv0KTKWSMHVzNuZm+UwxViLhok38oGeg9QYnMvpuCYqw67u67b8q04pb5osywx1TMOxJK9yCPmP2hUUFaGzlC6/dmN7+qMaUzuDpdMHuwk77QhtUgBgtDTZuCcQDKGis5q5UnFaP2EVLQS0HtaqMaC6arU+NzGvbhc/NPtnt85MikxFJBxRPfxlXuKa+0PnrzJAE6cX3+xuP66Rzeoycp6zG97uscfPdNBu2Dq+WH1ro2YFfJ0X5X4YHOZLIIcDc1HlWFuEZSirzEVJ7VUhBdIaaugyKBCXebbA/Hdc9iCoXjjty0Xcc4CLRRa1j9EpIpot/uWZIbi1I6SiDTG7huqqzwD7xj26q6tqpBAn1v4D3t4rLk4lxRdbemiKOyQvYvNBeDXGSatvzC6Xn9aTwBBcUxkf3NDRFTrP3sPLGvLKCU3qe2OLTkdW4p4XoBK4hYtTmzb3l0ZYfxN5f4ATz83nKcHwJGMDn4RQX4TLsAddyep41oEhUstKndvV+eSar5ZpDh7jiggyNg7zBU5RzOj6V6FuU0LY137o2GGhDcNfhhwefrpRnOQ4reSaGGlvNroxQltBK0Cs4dXCe+t+UGIogc7+PV3wxuSb6pSHo6weKPdTtss3KV4wDtwn+p8u8cPi5SKxYne8up9LBi1E0dXDs6Kmy3A1C6Dl+iPZ8nMi3+joPIQqu1CacukrVpsxocVdB8O7losbEju2vfLsSQYrUzCbQaa0VCRuk1JAzmKzXdd1V6/ek0F462ScYMHOYMELsJDZUz29uZkETgLXPoufqLCgmVdx5RjOgLTDk+9MRMcxA6yEVk4nOhydIiKVHaDWaVY9D7ll4KiY+fQ8I1VavGfJ2EdUeX6clN/1thV8PCv1ois89OI4b3A8CnZpDMPrYu9eD7g9dkAq9fm19jfTaelu8q0PG0R4hWsPasZIf3tmO/DcykJlr6TrbnxAgbO1BdZZ3xbWTfT0UH5wb4vLREI2O2vE1Vbqm/wGIZs0mHv/jZVd1/iiAGvE2XF1mi9KqdWoRC/XkH+j7fFeEh4DL0PPl5F0jzFzyYAJqEi4oW03Yd4SbIQFMunEb8PC1nZsastCQz9b8CMWKnu74hYEEjk2nNbZ7K4p/GAEHb0KUGTJSs2S35Tec2mbkfyEDN7tJgUvQk6TRyUjnrsKRiaBjGSNgbTOJJs5Ek4AmTjgvMP5qCVSIFAlaehneRQhnZiuVo43MDfnEBx03aMqCGH2tNMDBHD4HSGxEuP9ydKP+1FhGN6Q7AwZ9UfGLRJe2rzmajgjT1K4lmflqiCoW6EsT7HH4agOs7PwLEOwmQUAB/VADqbPRNfZgtxB/YRGSrkHXtunPIC+UEA+NhL7cU1Ie8HJdZxGyPprqW9sVs4lWXiWiEeOTUqSekKArtCCvvML4KH2APRGMGt5CHlqyOi4uel24+RmDA2+KKTOuX7Lz2MQSIheFT9hgiHXznHzMTYIJGgG0IUwpUG7zvGnUtwJmgdM2gQb+gprMRPNDwjhycusPpnE86ShljhbKbzBFI0amAkI7Ds0VvZcHHo22kBEB1QJNjYlhpaVLc62xYxlxOijVLfwugL1861Ksjp3peS79NUBEoQi+bAXxYpM0HvYFwMlHOVM0NXhoKy5xmell88BddB5QzUDOSn0LFAj2eoygKMrWXal6enBL5vhP7MQ2mAOwKJcRh3oB3USBKkPOmXC97ZT/ibTjQk0cG6Yikis5bllJPHfrXrDYg7MN6nG+/gvsBdKMMXynYjGPSLESu41dBcO8w0bHXqHYH9psMTvyalnhBdeY69QDaLu/HUqSmfcAAAA=="
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <HeroVideoPlayer
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headshothero-pdhaIqDrwHMpqHtCjlzLW1nNsrRcPD.mp4"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50 z-1"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main Heading */}
          <h1 className="hero-heading font-bodoniModa text-center mb-8 md:mb-8 lg:mb-12 text-white">
            PORTLAND&apos;S TOP-RATED HEADSHOT &amp; PORTRAIT PHOTOGRAPHY STUDIO
          </h1>

          {/* Subheading */}
          <p className="font-playfair w-full max-w-3xl mx-auto text-center mb-6 md:mb-6 lg:mb-10 text-white">
            We Offer Headshots &amp; Portraits For Individuals, Teams &amp; Everything In Between. Trusted By Portlands Leading
            Companies &amp; Professionals.
          </p>

          {/* Tagline */}
          <p className="font-playfair text-center mb-10 md:mb-12 lg:mb-16 text-white">
            PROFESSIONAL, POLISHED &amp; PRICED RIGHT, EVERY TIME.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <Link
              href="https://ww3.headshotportland.com/instant-quote"
              className="cta-button cta-primary button-text w-full md:w-auto text-sm md:text-base py-1 md:py-4"
              aria-label="GET FREE QUOTE — get a free headshot photography quote"
            >
              <span>GET FREE QUOTE</span>
              <span className="arrow-icon w-8 h-8 md:w-10 md:h-10">
                <ArrowUpRight size={16} className="md:size-20" />
              </span>
            </Link>

            <Link
              href="https://ww3.headshotportland.com/instant"
              className="cta-button cta-secondary button-text w-full md:w-auto text-sm md:text-base py-1 md:py-4"
              aria-label="BOOK NOW — book a headshot photography session"
            >
              <span>BOOK NOW</span>
              <span className="arrow-icon w-8 h-8 md:w-10 md:h-10">
                <ArrowUpRight size={16} className="md:size-20" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Leave it to the Pros Section */}
      <section className="w-full relative mt-0 mb-0">
        <div className="relative">
          {/* Headshot Grid */}
          <div className="w-full relative overflow-hidden">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 md:gap-2">
              {/* Row 1 */}
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/HeroGrid18/angela-headshot-photo.webp"
                  alt="Professional headshot of woman with dark hair in blue floral top"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
                  priority
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/HeroGrid18/abby-headshot-portland.webp"
                  alt="Professional headshot of woman with reddish-brown hair in purple sweater"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
                  priority
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/HeroGrid18/austyn-portland-headshots.webp"
                  alt="Professional headshot of bald man with mustache in floral shirt"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
                  priority
                />
              </div>
              <div className="aspect-square overflow-hidden hidden sm:block">
                <Image
                  src="/images/HeroGrid18/john-headshot-portland.webp"
                  alt="Professional headshot of man in navy suit"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image
                  src="/images/HeroGrid18/cheryl-doctor-headshots.webp"
                  alt="Professional headshot of woman in black and white checkered jacket"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  sizes="16vw"
                />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image
                  src="/images/HeroGrid18/scott-black-shirt-headshot.webp"
                  alt="Professional headshot of man in black shirt"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  sizes="16vw"
                />
              </div>

              {/* Row 2 */}
              <div className="aspect-square overflow-hidden">
                <Image src="/images/HeroGrid18/headshot-portland-amy.webp" alt="Professional headshot of Asian woman in white button-up shirt" width={200} height={200} className="w-full h-full object-cover" sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw" />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image src="/images/HeroGrid18/cameron-suit-headshot.webp" alt="Professional headshot of young man with glasses in navy suit" width={200} height={200} className="w-full h-full object-cover" sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw" />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image src="/images/HeroGrid18/hannah-headshots-pdx.webp" alt="Professional headshot of person with short brown hair in green polo" width={200} height={200} className="w-full h-full object-cover" sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw" />
              </div>
              <div className="aspect-square overflow-hidden hidden sm:block">
                <Image src="/images/HeroGrid18/valerie-headshot-photographer.webp" alt="Professional headshot of woman with short dark hair" width={200} height={200} className="w-full h-full object-cover" sizes="(max-width: 768px) 25vw, 16vw" />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image src="/images/HeroGrid18/portland-headshot-studio-andrew.webp" alt="Professional headshot of man with glasses and beard" width={200} height={200} className="w-full h-full object-cover" sizes="16vw" />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image src="/images/HeroGrid18/maureen-studio-headshot.webp" alt="Professional headshot of woman with shoulder-length brown hair in light blue shirt" width={200} height={200} className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} sizes="16vw" />
              </div>

              {/* Row 3 */}
              <div className="aspect-square overflow-hidden">
                <Image src="/images/HeroGrid18/woman-hijab-headshot-studio.webp" alt="Professional headshot of woman in hijab and black blazer" width={200} height={200} className="w-full h-full object-cover" sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw" />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image src="/images/HeroGrid18/siddhi-headshot-photographer.webp" alt="Professional headshot of woman with reddish-brown hair" width={200} height={200} className="w-full h-full object-cover" sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw" />
              </div>
              <div className="aspect-square overflow-hidden">
                <Image src="/images/HeroGrid18/woman-white-top-headshot-portraits.webp" alt="Professional headshot of woman in white top" width={200} height={200} className="w-full h-full object-cover" sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw" />
              </div>
              <div className="aspect-square overflow-hidden hidden sm:block">
                <Image src="/images/HeroGrid18/headshot-medical-portland.webp" alt="Professional headshot of man with glasses and beard in white shirt and tie" width={200} height={200} className="w-full h-full object-cover" sizes="(max-width: 768px) 25vw, 16vw" />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image src="/images/HeroGrid18/tom-fisher-headshot-photographer.webp" alt="Professional headshot of man in navy suit" width={200} height={200} className="w-full h-full object-cover" sizes="16vw" />
              </div>
              <div className="aspect-square overflow-hidden hidden md:block">
                <Image src="/images/HeroGrid18/male-headshot-portland.webp" alt="Professional headshot of man with glasses in plaid jacket" width={200} height={200} className="w-full h-full object-cover" sizes="16vw" />
              </div>
            </div>

            {/* Gradient Overlay for grid */}
            <div className="absolute bottom-0 left-0 right-0 h-2/3 md:h-1/2 bg-gradient-to-t from-black/95 via-black/80 to-transparent"></div>
          </div>

          {/* Combined Text Container */}
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-0 right-0 text-center z-20 px-4 md:px-0">
            <div className="relative">
              <h2
                className="text-[#247ba0] font-bodoniModa text-center mb-0 md:mb-0"
                style={{
                  fontSize: "clamp(32px, 12vw, 60px)",
                  lineHeight: "1.1",
                  fontWeight: "400",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  textShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                LEAVE IT TO THE PROS
              </h2>

              <p
                className="collage-subheading text-white mx-auto md:overflow-hidden"
                style={{
                  fontSize: "clamp(12px, 4vw, 24px)",
                  maxWidth: "100%",
                  textShadow: "0px 1px 2px rgba(0,0,0,0.5)",
                  whiteSpace: "normal",
                }}
              >
                <span className="md:whitespace-nowrap">
                  We&apos;re a photography studio for people who hate being photographed.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
