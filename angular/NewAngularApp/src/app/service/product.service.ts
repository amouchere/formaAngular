import { Injectable } from '@angular/core';
import { Product } from "app/model/product";


interface EntryProduct {
  key: String,
  value: Product
}

@Injectable()
export class ProductService {

  constructor() { }

  _products: Product[] = [
    new Product("Angular", "Formation Angular 2", "data:image/png;base64,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", 5, 20),
    new Product("Java", "Formation java", "data:image/png;base64,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", 8, 3),
    new Product("Spark", "Formation Spark", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhUSEhMVFhQWFRcVGBcWFxwaGBsbFhkYGxcaHR8ZHi0hGxoxGxcVITMkJSotLi4vGiIzODMxNygtMCsBCgoKDg0NGRAPGi8kICU3OCw3NjY3LS43NTE0MjctNys3Nzc1Lzc3NysyKzE3Kzc1Mjc3LTIuLzcwNy81KysuLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQEDCAL/xABDEAACAQIEAwUFBAYIBwEAAAABAgADEQQFBhIhMUEHUWFxgRMiUpGhFCMyQmKCorHB0RUWcpKTssLDJDNTY9Lh8DT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMFAgQG/8QAJhEBAAICAgEDAwUAAAAAAAAAAAECAxEEMRITIeEFImEjJEFR0f/aAAwDAQACEQMRAD8AvGIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBwTaa2hn+FxGL9ktVS97AcbE9wNrE+RmBrnGnCZIQpsajBPSxLfQW9ZW44TP5XNnFeK1jbT4fAjPjm9p1/S6hE0ek84/pXLfeP3iWV/Hub1H1Bm8ntx3i9YtX+Wfkx2x3mtu4IiJ24IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAicEzCx2b4fAf8yoqnuvdvkOMi1orG5lNazadRG0V7Rq96tGn4M59bAfuaazLsi/pDTdSqo+8WoSviqqNw+pt4iY+qczTNs13pfYFCi4tyuSbeZMnWkKHsNO0h3gv/AHiSPoRMila8jk331r4bl7243Epr2nfyr7T+aHKcyWp+U+6471PP1HP0k5xesMJhx7rGoe5F/ibCRzUmm6qZsTQpsyVPeso4KfzA9AOo8/CcYTRWJrf8xkpjz3N8hw+s5xTycW8dK7dZo4mbxy3tr2ZGM11UfhSpKvi53H5C38Zqamp8a9Td7YjwAUD5W/fGf5fQyqoKSO1Sp+cmwVfCw/N68JkaUyE5tiN7j7lTx/SPwjw7/l5VWvyL5PDy9/x8La04uPF6nj7fn5T7JsS2MyunUcWZkDH1H/xmbOFXaLCczerGoiJfOWmJmZgiIkoIiICIiAia/Oc7w2SYffiKq01PK/M26Ko4sfISJVO1jL0qWCYhh8QRbftOD9IE9iajT+pcJqGkTh6gYj8SEFXXzU8bePKbeAiVbq7VznVailiAlLC1aK1ED2NYu49qLA+8qqLHuJMmWvcwbLNIYiojFX2bVKmxDOwQEEcQbteBIIkE7PmxbZlVLNi2w3s0scYCHNX82y/HZa/0mo1hq1/60qKWIFOlhatFaiB7Gsz1B7UWv7yqose4kwLSiRrXOa1stwFKnQYLVxNenh0dhcJvvd7HmQBw85lafyFsnquzYrE194W4rvuAIvcqLe7e/LwEDdxK8oarqYHUuPZqOMr0ldKaexTfSp+yT7y92AUkm5m90HiKp0ZSrYh2d2FSqzMSeBdioF+m21oEmmm1LngyXDA7dzvcKOQ4cyfDiPnIh2bVK+Z11r1nzDdtep943/BsGYhQl+LEKwPdwPcJKtW5I2cYNdlvaISVB5EG1x4ch8pTnm8Y59Ptdx4xzlr6nSD4/UWLx34qpA+FPdH04n1M+cDkGKx3FaTAH8z+6PPjxPpeYWKw1TB1ttRWRu4i3y7/AEmzy7U+KwFhv3r8NT3vkeY+cwa2ra/68y+ltW1aft4hvMDoTrWq/q0x/qb+UmOGojD0FRfwqAo8gLCanKc/GMwqvVQ0dzKibyLOzcgnU/KbubnHxYq13jjt87yc2a9tZZ6JHtV5+Mqw+xLGsw4foj4j/ASQyBa+yz2WKGIHJ7K3gwHun1At6eMjl3vTFM0dcLHS+aK36abIsoqZ3j7XO0G9Rzz4+fNj/wC5aGFwyYTDqiABVFgBIV2f5kKdZsO35runmB7w+QB9DJ3Kfp9KRj8o7ntf9TyXnL4T1HX+kRE97NIiICIiAmu1BmyZHk9TEPxCLe3VieCqPEsQPWbGQnteotU0axXktWmzeV9v+ZlgU7mWPxGo839pUvUq1GCqqi9rn3UQdBx5ep43M2mZaFzHLcvNapR9wC7bWVmUdSQp5eV7TVZBmjZLnNLEKoY023bT1BBDDwNiePQz0Xk+aUc7y1a1FtyOPUHqrDoRyIgefNJ08Y+e0zggTWU3Fvwheu88gnQ39ONp6NAZ6Fm91ivHab2JHGxI48e8ekxMnyXDZJQKYektNSxY7epPeeZ7gOg4CfWb5rRybAtWruERep5k9ABzLeAgaU6EwLZEcKUJDcTVO01yS24neVve/Dy4Ta5xk1POMCtKqX2q6PwIBY0yCA3DiLgXlWZ92rYnE1CuFRaKdGcB6h8bH3V8rN5yPDXeah7/AGt7/wBlLfLbaB6EddyEXt4jmPEXkaOhMCcibClCQ1y1U7TXJLbid5W978PKRHSnamWriljgoBNhWQWA/tryt+kOXdbiLUUhhccoGuzrI6Od5Z7CsCy8CCDZwy8mBHJv5mfOQ5KuSYZlFWtVLNuL16ntH5AAXsLLYcvOd2c5vQyTAGtXcKg+ZPRVHMnwlTZ72q4vFVCMKq0U6MwD1D48fdXysfOBZ2G05Rw2WYigrPtxDVXqNuG69cWcg24cOXCZKZRTTIfsilhTFH2AII3Bduy97W3W625yiV13mqvf7W9/FadvlttJppHtRNfELSxwVbmwrLwUHpvHQfpDgOoA4wJtpzTNPT9xTq4h1KhQtWpvVQvLYtgF9O6byLyCa57Qk0/iDQoKKlcD3tx9xLi4BtxZuRsLcDz6QJpisJTxdLbUVWXuYXkG1jhcLpDL/tSUvaOzrTp06jXpqxDHcRzYAKeBPykJqdqOZ2J3Uh5U/wCZkj7ZMS39C4Om599iajdOKIAeHTjUMrtipaYm0bWVy3pExWZiJR3RuPxGo+0PD1K7lypduP4VC03ICgcFF9vL1l4YnEJhMM1R2CooLMxNgAOZMpbscohtUvUNgtPDuSTyBLIPThunx2j61Of1zQoNbDIeJ5e1YfmP6A6D17rWK1h4DXNLHZS+JSmxpriDQtezWChg9j33HDxnfWz7A53gWpO+zeLfeC1j0N/w8DY85F9CaVxJ0fWWpZDXdKlJWuCNtvebuuLcP5zox2ncXgvxUiR3p7w+nEeomfysualvtjdZhp8PDgyV+62rRLBVnwOMuCN6NcEG4up6d4/eJbOVY5cxwCVV5ML27jyI9DcSnybSxdB4d6GTEuCA7llB7rKL+pBnl+nXt6k1jqXs+q46zii89wk0RE2mAREQEREBOnG4VMdhGpVFDI6lWB6gixE7ovA876z0tV0vmW03ai5JpVO8fC3c4+vMdw50ZqqrpfMNwu1FyPaU+/8ASXucfXkehF8Z3lNHO8tahWXcjfMHoynownnnUmS1NPZw+HqcdvFWHJlP4W8O4joQYHozL8dTzHBJVpMGRwGUjqD+49LdJQ3aBqZtRZ21m+4pErSHQ24NU8zb5W8ZIuz3OHwuhcwW5+5QungaqMLD9ZQfMmQbTmHTE6gw1N7bGr0lYHkQXUEevL1gWDonszTFYNa+N3e+Ay0QSvA8i5HG5+EWt17hLsZ2eZXisPtGHCG3BkZgw8b3sfUGSoRA83aryB9N5y1BzuFgyNa25GvY+BuCD4iWz2SZq2P0psc3NBzSBPwWDJ8gSvksiPbTiUq6gpUx+JKV2/XY2HyF/wBad2ht+D7NsxrC4uHVT5UgLj1b6QIxrrUzakzpnv8Ac0yVpL029X82tfysOkmejezFK2EWtjtxLAEUQStgeW8jju8ARbrfpAdI4dMVqjDI/wCE1kuDyNjcD1IA9Z6SgRXG9nmV4rD7RQCG3BqbMGHjzsfUGUrqbJX0/nVTDub7bFWtbcrcVb+B8QZ6UlLdtNv6z0rc/s63/wASpb+MCadl+dHHaO+8Nzhy1Ik8yqqGX9lgP1ZSNSq+Y4wueNSq5Y+LOb/vMsjQrnBdmOPq8rmsF/wUUftGQbSmH+1anwqd9elfyVgx+gMC2sL2V5dToqH9q7AC7b7XPXgOAHhIr22YjfntCn8FEt/iOR/ty5JQ3avifb62qj/ppTT9kP8A64EZw2Pq4XCVaaNtWsFD25lVJO2/wkniOth0vee9lejqeZn7ZX2siMRTp3vdl/M47hwsp58+Vrxqjph8Tos45LkpWdXX/tgJ748m3X8DfpO/s+1SdNZx75/4erZag+H4ag8R17xfuED0BE+UYOgIIIIuCORB5GfUDpqYWnVqbmRSe8qCZ3REjSdkRElBERAREQNNq7NauSafqYilTFRkAO0kgAEgFjbmADe3DgOco3Eawx2KzmnialUs1Jw6LypjvAUcLEEqTzsec9EVqS16RVgCrAqQeRB4EHwtKb1L2XYnCYlmwdqtIm4QsBUXw94gMPG9/DqQmOH7UctqYEOzVFe3Gl7Ni1+4EDafO49JU+sNQHUmeNXK7F2hEXqFW5Fz33JPrbpMmjoTNKz2GFceLMgHzLScaS7LhhcQtXGsrlTcUU4pcct5P4v7IFu+4gahMsfI+ySs7jbUxT0jY8CE3rtB81DN+tK8puadQMpIIIII5gjiCPG8uPtrr7NP0afxVwfRUf8AiyyA6J0n/Wtq6ip7NqaIVNrqSxPBhztZTy+vKBYOm+1HCYrBqMWTRqgWY7Wamx7xtBK+R5d5n1n/AGpYPCYcjDXr1OnustMHvJYAnyA494kCxnZxmmGq2FEVB8VOolv2yp+kysr7Lsxxjj2op0F6lmDt6KhIPqRAjVOnidTZ5YXqV6z3J/eT8KAfICXxhdM08Lo84BTwNF6ZbvZwdz/3iTGlNJYbTGHIpAtUYe/Ub8TeA+FfAetzxm/geXnSrlmPsbpVpP6q6Hn8xeXHp7tQweLwgGKJo1QLN7rMjHqVKgkDwPLx5zM1voKlqRvao3ssRa2611cDkHHf0DDj52ErTF9nOa4epYUBUHxJUS37RB+kCe572oYalT2YMGtWY7VJVlpgngCd1i3PkBx7xIN2r4j22tKgvf2dOkn7O/8A1zY6Z7Ncec0pVK4SkiVEdgWDMQjBrAJccbW4mZmqOzzMM31FXrqaG2o91vUYHaAAt/c52Agcf/h7Ee41X/zYj/wWR7svw/2jW9DuQVHPpTYD6sJYGodI4rG6GwuCpGnvpGmam5iFO2mwax2m/vtfkJi9nWh8Vp7PWrVzS2+yZF2MWN2ZD1UcLKfnAsiecNZ4n7Xq3FN/33X+4dg+iz0fKTxXZhmeIxLuTh7szMfvG/MSfg8YFgdmeDFPQtFWAIcVGII4EO7Hj4bbSptd6aOms7KKD7F7vSPh1TzUkDyIPWXrp7AnLMioUGtup0kRrcrqoDW9bzD1jp5NS5I1E2Dj3qbH8rjkfI8QfAwIX2Sar9ogwFZveUE0CeqjiafmOJHhcdJaEpGh2Y5rh6yujUVdSGVhVNwQbgj3O+WtRw2JxWGwzVrJVRr1hTqOEb3HHC1twL+zax5cR5huImjyHA4vC1F9vV3haQp/iJuRY7jccX4upPUKp6mbyAiIgIiICIiAiIgIiIFSduOKH2vC078lqvb+0UA/ymZ3YdQH9HYmqPzVUT+4u7/clllA3MCcqoXkIHMREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//Z", 3, 2),
    new Product("Cassandra", "Formation Cassandra", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAABQVBMVEX///83NTW75vvT7/wSh7E0MjIxLy8uLCwqKCi5uLi9vLwgHR22tbUAhK8dGhoAgq4Afav4+PgkISEAAADy8vKNqLUXExPp6em/6//h4eHBwMAfaoV4d3eUk5Ovrq7t7e2cm5vX19eHhoY+PDzJyclxcHBZV1fc9f9NS0uSkZFGRER0c3PR0NClpKSIh4c8OjpgX1/L7PycrrYRDAxdXFwnGxXL4OqRr77g7fMsIyCKo7CixdZ/tc5urMi13fGOvdMxRk/s+P6bvMyszt5epMN6kZzS5O1RWV4+lrq71uNxhY8ZeZyswcsqVmgxRE0kYHcKRlsdQE0RGyEAcqUAYIEAb5gAESJQR0JDODNcbndSlbI3KyRLVFoxgqQaAwAsUmJGZHN2gYcjMTgkEQBzlqcZAAA0iKlOb38MLz18rMJiaW2h+OBlAAAgAElEQVR4nO19jX/aRtauiC1pJIRAsgJIASGBIICRocFOjB3b69hO7LhttrfZu5tN9+1tu/e+u/n//4A7n9Logy8Hp86+Pb9fG5CRNPPonOecOXNmJAh/yB/yh/whf8gfMkfs37sB9yvW+j8L76UhD0f8lf5kcZB4o/trzUMQd/6falr8OYg/KpP0D5comrFum76sRM2j3bC93L9i6ccfnVb8caclJKW2hFqCxX/+naUWfaJ80OG7k2z7JKYMaxB9HO1kmGTAf4mMzWEf1AdJxtHTjzrtEqPwityv2gklaVTjz73INPxpX0hJg9eaiGdU9sHI2NmDEPbELMYOrR2sL/60F/2mJiaItrETs8zeHvvkV4tpOnb3uC+Bzu40ZIf2HyYZN+mDbLL+DGX8z1iKnnk4bXAnGBMz6pPg7jAl8XXTS13a3+G+1HbYn4cKO3koPEjZJ2piTalptE2szV25UCSGrozNImfyfkHWIxtTd5gejKpS2mysKeeWjPGUgrdn0kO1nYdJrq1iG//rTcn3UJdRL8NioVAAnuI2iqYoxp1tNaqi3GXf3GqV9tOpiiBtNkMeo55JwdMiqxtmqOdBiBUCHalHq0jIVNMhENDuqwUkwAQy+ldyiAqNGkX43WSc2SbwCQibgkm8Tcyn3R0Ooy65DWIcwM5+oEpS64syIoqepCNSDSEUcvN8VCwkxdT7k0m/aCKATPqU/SEoVAkCzWoBENVRIle+V23Ht9kzKWIWYKcrHH0/KFFMqAtdpycXpE83x2/gt4I4PEojgo5Kkog/SIRqR92qWJBJr7tmQepjLNpRxAENMPbbni528AdjKBfIIbtazRsu1HKOfWHpoH5KpoT+P5tJpPdyFhEOmzd7zUFXKqLf6khJalBbxA4yAqsXeSalWlSim7h6gTJyTy6q+IMxBrs5zXF/Z0jOt14NpUW9n4OJDGSiMVhJXF0qiCLyLY4psx4F1ZiDBXVaAFSdAHNLE7majv2hhM177fBCOd+6OPowPpiJ6yPCyezmPOhDW5MKriG0unqR+ZIAuqWox04VmhV2TA2zQK1lz0QknhbPzB77InL+/NXbn8wZkD4PDyRjYMKLiD3Nsga6LLHwHPqrYhSSQEREEUepEBGZWJbLuCUh7R0ne/DeBdrK258OZvLno8GJ2GtMdFAoVGlAp1QLsdlAqykArD0QEVHG2jKqFvSsA+5Wu5lj9y3nN1cbh4NgIiFKohogeFAthsxsYMBSMJvI90C3RHXHhrFPI904awjkHHa5Tzn/9q00A3PhECVZjsASqXz/p++hjOmRZcCY+MEbqOuA6YCnwy9tSLpGD6oR0Z0WEMVOOrPkA6moCV9Qzr/9YOaqh0g6O/7+h0/t5mB/jL58//N37949gfKO/POEfP55jM+H0M0hodnRU2g0MgpvPXrfNgxwQAMyql2QEa7IIVnwpmbabFw4Hkgqzr2OkY1vPxTNrLPFUPyJdv+fiuNNYF+//+7JfHn3PTylEe51ewWQh8vspw8SoluwS4I0Yx8gREa4x0iNUEhijaWCOUg1sVuETilhNgtynJ8t/i8ggwe2ie9iFThSHa8/+7gQDwaK3FccR3t29cubLC4i/i71CM36kowQCQRrgqNhDARCRJ4kk5ZwbA2JN6E4zXsL2YxwqMsZNH7m0Hjy5P2VEoQQkO9uS1C286R0i4SAUpi5nqo8Q3L0y6fhTM7g3SGdayLNAO2R4ZEmgK6FclES1IdkdtFDPzQTKcr2fXljv1Hl+RRZyp8SaDx5cvuXS6ivg+LHd6TzlxEm1/PA+W9t2lSfRfL20zgV4Tx+dA5DkwJACrMXwqAMH5WR7vjQrsROor/2EI2rQCKR2Q3vJ3Gv9RMKguD4+UOMxe1tZfvkZPsCEpl48DNFonxMkSidXeYrzHb55XPT1PwIkscvHl996McmJF09qp8+6xfpd0DbIPUDQiliIeFYBphlQJc3lEn7PszG8nBcydAQxz8j7XjXIGjg3paek596/yXebpdOyri/Z2f43+3K+VxIbv59K5rW063nN98STKC8OHr7E9MVOKY+yDh7aQiptaEjuuE1QJOwCskTfqKss7tgRu2uUoMWE+Ehg/3xz5Qd2/8v6mj5kPzW+L8/I3wuX5axchxWMFzXAoMkbUAV4R/bt7OesIUEwXL0+HEalYwgRBwJ++GQm/UZkscm73PUOtInm88s2d3IYkQJ9H955n1PlGN7e0KVAOkD+/k/cd/L5xVsFQLp9w2FpHKTUpbStfWX7e3b37SnW1ROj18cHVFUPnRyY2M4CHJ7yJSksRtRqzKkxiVPOHIJdyYbp1a/W2WASKDzC1LtPsSDdOjX1xXWtSt2wg1GqfIcoQUhIaAJBBJIHOUkJOULFx357m8RJN9A7riIULl6A3JCoJ6Mj0p9hog/iAwbTNR4mnEynTgbpla7W5WYwcifrggDvo869Gc/soNxEhIIRgn/H1kOUiEESWlbOElBUhHe4H9n3zJIth5BwagwVRlnVIV8F4euLxiWr7TFmPlBI0bELRZ31c0iUtuNASEK8uzbm6dXse6/9y5YF/8PO+mf9M/CRWW7fCII1yVIrgSSyqGQtpsT68/4w7tPT3lIkJweP6a88naYP5gSgSybetGMIRPBQI0mgvpFs71ZRKw2Mxlx9tNbggds8dNbrkd/EygkFcau9t8r7MB1qQQhOS6j/wsnEJljITY0rErlyqFLde4g0pI6w6Rev3gV2c9K2Sl56DIM/Ikuy95mEfGYMkrgzdWLx8+e3ZAWJ9jgV5twBeRPQeh19oe/fSccVzBtHAvPKwiMw0rlNYYEuh3KLNvla4hQafvs+Y3wV6o3P9zEZBJL/RFVlRdHbzJxbUaktkO4tOX2dQnis1EeUQvU7UqzT0cvHh+9eh55BB6Sd20Be5ZLeIp78PHjx3ew44fbZeSGobHg49fb6IIn5bKBrQgB+PK8jBwzEpvqzftv8yBBoFBWeXH0KYdpk4Y0nISq4rb7OjQ00FU26WvsHnVoIgHk+LQe6fUZD8ntb9AwICSwt8av28gvI0oVThCnIgVBkJwdY0iQIhHPvP0aQVOmT/CYXO/2WYZMIlROXzFNWWY+EjBNgKhFkprqBuMRo01ZVQRvICCPj+Gj+oa192nSZ/wQCthIYCjNOKZygdxOqQKj2RMEySHu+wkiFETGFQgZiuPes9sRyyl7cyFJgDI/a8WrC5ho2gZLTVQA6HV/ghzy+AI3KoYkGZnfHkDKQJZhvbuulGKqPb9GXT+PAjjhJfrfZQmpCDoDOnDW5H8QSOZrSQKUq5+WgyIP4eB6c1nG1kSnQWAnBmQ+JNu/esIJVAthUDl5fVaiqCC9eFnJXryCcBIM/KP3NO/jVigkWZeTFAaK118IiigX9lRtg0YTUpuRpF8ex4A8erQ1D5Inv1kIAOs95IhD4fllpQxpAjPn88zFb8rI90DWxW74AKFjt/9FrlOOY7Vv8iFhoDxzBh0wFxAwbquKsrmhr40mliiJQFLlWjMXku3vcU44RN2EgYdgXFxXylgZskJAukBqUSojuh3qBzNKQZUVIIHmg7yPoqp7hbxJVTgk7Q9UVdtgntWjKoJs5ujVo/pKkNxOESk8If26RBpzeLb948Xcm+AIv3J9AX/ZPPj4c0TKz1eAhICiKRCUtpgK8yUZdBquA21mc8FIjamI/AFa7GnSomNITtKJj/+G5wY0uiiXsGkIz+dDAvHYPsOx7uhf3FUqhytBAkG5eAYxQZoyBBKeC5EkWQbjSRvioWjBihXYq0ioExUBfaibF2mKi9q79TIzlkVn/5tF6pWzxbc5qbxEqMH/rBkP7j/OV4QEUn1NJaCEjf1er7c/abQ9V1UhHtpog4BY+0xF9p5Bm8lIDMlxeiyLnrghnDFMyteLFPfwBv9zDH/z1yfcVUqXT1eG5BEkPQVbj+pAUVUCh+ZstOjVoRMRoOdqL05zWhFDcpqCBAUlhmjAoU25XC7B/yqVmyV3O0Ts233HX6T0MoZkjhPmIYFmHrhhiHUDoaGpI3uzWYB2lToa6MAyNkOUNX6GSUhKfxfQzEkDutiTly/Pzo6Pjy8uzhfe7QbZ1t6fU+a3tR4ko54JABh3vWA0smubzsCjsh/saPquEhzmtyKG5GlSR0ov4BWO3+26K1vxGVKi5g8p84tvkBu9JgQC4E6xWosSGCpL77i2KIRXRdBQ4bhgziPiIEl64dIzAY383x2YK0YDWIXCH6DjQVFddJmna0HiT1kkIsvFgrphRNo6cevjUHUM4XxOK+KRcHIovF1Gs61wYPvkY9VDIcnF4cp3Pr+4zGPX5ZAIwoSOS4des9EDO/1NEmurT4wGTBQ8dJzL9nGLv6lkIEEfbsVZD8bRN6XyyesVbvz87LIca0n5jLv+ckh8nQVomqM6qtvY2VxRWkA8jSgPVJKBmtuMuMlJMsGQkEHL9x+ne5BRbpawq2DdnF0nrAZSyekakNSFHssliYUwgP4msNTdDSkKnlEmvEpmxObZTYJMXpZSkBhQb0pw1PKuu8q6s+DvlUolHQJzdrPU4TwNIiUpiGYoWL7i+sJmnHCXlOiau1F2Yb4dcx7hlLec2xAly0qly7ObJcrByfnNSUJL+KhkOZWcF/jRjTmEj6E1UjYRt7aI75VEL07JzX9CHL8+5Scxyx6C5Pr45ub14eE6D+rmOlaVMmc3SyGpN5OpAVHHk+L25ycEfEIjoMen5Ba0hGs073PKe8hwSNQKCWL7+vpte2+11h2eUFBK15ySLKOS+sVBOikg63ubsBpS2ySaDVXlVG5BUzjL2eIgKaE6bd6SSpXrhUx38/x1i93x8BKfyYeuy5VkmJn7E0WQWc60vgwwQ0mFUOEJcT67Ji2HSxCUUQbpshKBVCrPzwtgeY206f13/UkD+arnaIKDJ9dlkNTfzlKASMPhWAZ69TMXWXdNEoyk8tiLIOEtJx7n0FzA+QlVlMrlUpI9pLMUP/8moomWf1f4oGSZ3dRfpcxG7MHhsKqFXrM/9e5uPgaOz0Swp6amwxZCwllOpCbxoBfzS6mEvhvHx6tgsg1HAai66mYdJTlNT5mLPQeNhBXFaQnBwL1jXh7VvOH5UyUTRSxsDtdwyiZlLscKhz4VNFdzc1m5XtKAw0jJvvsvTxB4RJYpyU+ZCT/g2bWa7QeKi5LQdxsT+7gSw+yqOXnshe3h1YROBXMNeF3Zfi28flmGXmRus4yLNCalH/5q81AvQeSXWRoRyCWUrI3a6I5JpAC5GqngqXkzposjR67pT/Hs7j/4c88Oj7cRzZIignxYziok7XoYB2rvn3OXXZJ2PUr7X1R2LnXiexn2HSI2VJePeTW3pm3xU+L9ME6uPeHPpW6ngjVhL+/qUK7LlWvEN4esJLb8cmUmqb/IINKbyDIcj6wPAyeoLl+Cgzw1H82F/JpUE5Rsfc/hWvsLRy90TThvmTd4FuewAt10+eWhcE4wSURpi5WkfpyJ0YDmaG1J/ixMcF1+L4dXmSyGhFcTlEq6/Wt8Zpd2EX12/zfu/xmfJTj/EfshTEJoHueQcAl/yYVKQhARJUmK6xzlgaKpSgOA4Z3dL17V087jVSZL+I1v/9Z2afvXfdYWjeRScYmE/78w7x7+eI48Mvrrc8gg17i0QiAFSFBVcKkWP7hZPKd1jAop5M6ksTvpS7T8E1KrNdJUt1cc33HUNwFYRRZNhy2xnAQmMGC7/SiTwlNrSoppkF4YEpkUvkYT5Tf4480l0g80a5yozaqcrWo2BBGpgacoHMVrdEC0jMnX1KYM7jTq6wFJ3nOW1F0sCQwSeg4p9snHmQ5kGJr/vYSpFcWu3VtccPKyXBIQ6aIHcPHjISqhKKHQLp4bqySodZGCwqAVqYXcVDUsiuqEXQmGbUUUxhuBpiTWmq+OCHQ0yrLyLWOJmiTo5LQC43Lx40eZ1IyUTs7g1dX3WFnQAZQ3KCMHc4yMprJNCm4iRE4SiCwIAOqPCbOK/QDFYkbNhyGrquwNgVjFJfQ1VXXBuql6o2+OPXWF0pxlIfVWAhP0xG9LqDUoULlGpQM/4KIsoYSpltYzvixBlEg18LVBTaecRGSBetavmK+J15QYtgN1xeuDKUFipPm76ZVKSxDpmI0VJ9WXJfqSmGBf+uRvxL2imb92mZbu4X8QZwioeA/iQ6ZOS+VDnKlMWc2CCopHn+KYtcpNUBg+HNmEPbozhaX4zjpLPi2x5y5yNAlZAkl9K9EV7EH+5SCOQHkB+z2eOUdFJDBEQQqBitbQAOj1IRstn22nmXUBkdRPh3wtSTW5+kbVVG/okS+jwGqv7HhaE3eNQpRlXidBsVtbqKgIByjYXj7hKuhzHH2cYSotnWGrgmrCgnhU83q6KiIvUlWM1eQyvZqjjVQ6ZdFyBHfFUY4R2JqzhuNeDxM4BCxtvw+ge4XU6eNiZ1LfCpWFOBfCqJXnUeapfJlEdS4i9Ucf0vmRQjVFGTU1EBgjBIa94pP3VwWPytP1MDm9LuMaetiuXRzTE9Yo39BVF4cCCWxvaEqhdPx0RUSOO6mlhNKwADKrxO3YmOyasZIz9tcu3loPEzTgqWDir73HBkOXar0m08cwSiEQYaRKlcut1RCpP3p7kFoS2lMc1W13xulMUTyJY9mrzOjU7hDsLrOdegqTrcsfUTM9fr64TMvtIYsQYr2+RsnqFIvM9TX1V4V0dgQORlCcFgT76cwGh0LtvnYlXBayJYc7EJSbE9SSbW7Cqszi1ArzNVBD0oDMQ6R++uEgU94qdR27ZsNY1RgtSD5b97ZR49KSsTQoW2iUt52e2oywQUmBb9KAzEGk/uhqxqUURbqgQCwQi7EVWxjNT7MaSzDx7zwLtqYzxrAIxnU5B5RSuVI+uXiaASSfRur1I4m3GbGvNUhFdJGxInQsyzq+QJy7LwpdlhzOYoKo9nIbla2VS1jQpwqaMc7BI19F6vUXHRaL0PUePUcNx3g1X7wJI2TIu1uItS97dyw1uIOiQFCebp1enL08uYRy8vLs+OZ1Hhxb+QO9ev3xOArO5H4BawdQRprWR/5Yjx8v1BLrjhYA3VIw3pH21PnnGxbO+ofNvQaWdjN0Ax8b65rumAeGyLy/56pI/fRKiqNVqeE4HppzAqFgOOoEoEWfyZbftXAvCCy1X9V1udcOtcC3a61WC899qK43aEyGoqnrRdMEQI4EALOog37b9Y3zxePA+lxQFkoOIPX6xdsZH74jn6s4e7KIdzoaKV2ISTGRAjDuzCg1TfWVhgSgmGaxqGMpUhSk+RvOiDIo6pPw23p9ESx3ACUPkEeP3xwkY1VpMmrZjuIOJRNlRWwFJUpBAoPP8Le+pqlO2OjJizHIEwnMZp+OLhaish4oGUAg5K8+zLKr1PCsVU2BJoM3YqypbRBtkcQw+QxQcMrFUcJBu7vfH6O9ipDSICORsMjsQN5Cf2k2G7599WiBtnyzKirfZC5Rrx+/LczyljJSnxuou2SsZ6kDkLc51p3FQuk5WnqOis5dKCSTqZCqa9cNvWZ7tyfmLbUU5dnszdVxfT4sK6CSwQNe7BXEg1v8LEnxzdnGnr7S3sE+01AHpihtDhIBZy0DmtElSCgaLwoFLGzkb6soybODT1fHj+aiUl8Ayzdpe4HgXhy9SW5DJg53G91xtFKN7YVcU/fIjr+G0wTZHcM2AIxVs20fysinQr76o1GA9UdRQ64eTJR4pUHU8ubq1el8dYG4fJMCI60ddQzHh8JB2l6Ai6YlmiyRxnYuhSbT9iJM9C++q57RsgMlqiyVzX63O06vkJodDD+g5cOLfVEeXkhOX129mc1mOawldfFYF/IombuKdoM2VBpuQkxMc4PLblaWGiktFUGnraHn1sm0XoSUezD+cPXiAgOzFBryo9Pjx28/fTzI7gLFxLRR9l1V3A7+RTHiUsNhqTOnqf8eu916ZAedTpOs/oFBTaQ1yC1F36C+zGadN2+PXhxf0F7nyaPTi1ePrz68KcBf56DB7cUHyKjfVpQeMh4p7rwxYv7WGUy9L46IYWLzaCNAVL9lCJRbZNBrezDwnySW6kJgIMEcHIjDNx9+eXt1dfT4BZGjo6urtx8+/TSEeoGwyA+IJLHXg16OsKxId/mFATwKVhODmnh/08Fd5vY+T7oytJmuBgGhb5jAWiPJDWRF0C85bj9P8+nSw1ksOOxZHBpC+kDr0dw2KU02GXf66i5IjH3jUNVw9opf+IUejg5txnMiQMhqD7CvYXcUjKAjV3tL985YBAMPkkMiAdUZoCI6aZ+1wsaY5G4JbTjtL0snraJodlWVqwA1INuabdh2xSdkbwVapiR3dRF3e1E0KE1U1baslj3SFA3xRzW6awvZjpT7ngrDaaw33fmZMgRjpCJcXt8FohQ6Cj+lbHvZVe75IIl8lQwWeeBou4DtMB7NadpwNCNHIauAohH4PVdNkJ58weiku9OAKpLY2mEoFVxVS1YdBGwZLaNaadyP64NiLQD9bqPLYi/2A2h5Ltl7W+pyXR4p0B5B/N2C32NLSojhDL7Y9uF7Ow4cNyemfoLqWMvMoLrUTw/cHtm5ta96rOOS53apj2rgeNQZ4Orj/R75halZ0E4m6IvY43tmax3R5KbCW9A+9fxpKCvwNtTjZRKKlq1pyQcwHCrZOgzEJSJAdUHYhMSOEkECQlVx8DhJ6jLyxD8CYQMjJY7RtCxxs2Ii1V4LQUItam4mk8ak5X+ZfX/drtBKb6vkmLaipbXUKaKSU0QwDjYhCAMbGYGmqgWBisxIbioKylgatoOcljQh6lIwUXLMx5iYSa6wu7Ke0JsQFOewRq32Jd6Ho4WC5ab5DLSC7Lb/UEkAdBaaCjsM9UHedTSjibVE7uLqL8tDuz6HUUSumYhKaoqHYjIyeKkh+gSpHXsDKbmnvD8wc3ZUx1Jr3f+O2cFIMLT0bZq+lUUkNAsAeWUMH9pjVIV6hOlVHKrkqAW/Au5q6K+6baghAo4MXlowvJHSs95tME58H3Wr8/Y5bt17wAZV3MgUs9lKzlu9Wrooew5zS/BRD9RAsPBY0QzZ7l2uWZA5c0dmhZKoDvpABy+IPoupa9ckPamnTh8Ic+S+h8SGIeSUImiCnT04AZxXNkykGQbkHOxi0EdyHA7nuIS6jeqQUXVMgFbn6QTmWiibaapoF5NhmOHmvZ6B/m15tz5PjKyr9/M2LHenPc4rWzrwFNjDtkzMJrrIAIhcd9FYksRhAfQ79MUvgt0spi2npheSB1rezu+RIcGSxRxqTnam0N7Z9blQ1tb7DtIGxJsgVOJ0sa1LvAZAxpHJwsRgXyrobDfF7jTNXpN0xGo37iG5eHfJmXmV2gYfugRTrCR+EcchfLDQATwkMKSTB+RqGgxpGGc6HS91fWeaXjAfjB/SSwqziHSbgqJxmuyOHRRwIhcsJgOYQSJN2oXBukeHjU0QJRENVxdSomdeN+c+0NdGEQk9IVB4oNoeNqKxiIK0xCzLKPE+FhjPArb7tb0f+5VWI+1kG9M0qVl7m96SY4MycpFf5qXr41hUx2sPk0q1w5sRpF/ZjbKFQI78ip8e2anTTKzuf/lXu6wqLUewUl7THSElGaBAND0S6vEFVG0ZDoSib7tyHG24qSu2ptk3Zzn3+V6KzxIbjteSR2oG7pAkwpAkrd0ez5MQkv34Bz6IaoogtaTOG2an9Iy7rnj9ApIN3NCRUREF9elWj7iX7UEukRocnA0zThb5qYu2p1kPU3uYryoU8l6Fh910WwZNJdNoi48nupI84MI+v8ipQioc1KY5bLqBzSfuRXIiaHzIlDLcioR/38a+BBJl2nxElop+/ExkIuTG1g9ZHBOEeat9Qi5+GYrjRPrS4WeokhG7Mc1zML9bVH8nmYBuhluRBNyTlaRJ0nub8+Ovzn7egO6Bv409IZYuaxluRcLZv2HKqax6uzq3j93+w/Uvq0lYbefv6M3Zf0sHYZJFg525mcJB/+sijqwMh2oOtyKJHzYcFqZyUcb86W6395DGeXcQf4dtQ5aRGChH7yop2Hpzo3Sn+8Unwjcr7W6wfAIh1Afp/Flz7gvWR+FXDsmOvcJy24aZWV/o5L3yloj/dRuOtuevMHTv9TM16/b8OhH/6/Y4/ZWGZNN2dr33/Pfbfl1hWVr8cJURWWvHzf6q8GBH/J8nTWGVF9GM+tnpoGQ+5T9HDNVYZW429HIil4a38eY8BAlyMig50vVzeIMW+P6nSStnpidHGnbOzwbLDceyR1/TaI/ISqMRS83bF6O5OMILG32zqv8OVa6fKyv5y1E6ZYslXOyqSDEs+M/kYME28swrWEzMpGw9857t/xTJNa/Fmya0CCT61x3bz5f8+HZhb32yuXX1XtrzACTfbSzkIRXXkYrz6rL+JwopB8xUbv1PljZ5Mbv3e7fjAQlZumDew7tNvlohq1aKX3l+bZNiUR/8dadONirUB292XfDXLRr2wdIXKslqKe2eKEv9djpWNoJmt4/+0m0qyTDKafcledhIcJ3fnBTkwiTMRqaBt9svyNKwO9D4HaysIOya7B3rzZ4k97LjvqA56chyf2DT+vOoHsN2Gx325tB9eZhIyPlhozeW5M6k7d5p4Ox3q6YMuUsUZb3PX8DfLZroBYFolR4wdbMfpTg8k5whmyDKPAdDHe1FC39abSeub7fNIruMbBaLfdr6wVCHlyelv3avin4i6altFZpyEV9UlOk7jemgz2rIOpBlXMI1kkx46jReMOsV4N/QOii08rKoD5PNWS5G9Fp6JNMYEmtSTS2sZwWJ1tCMjok79OftarwWa8ppm9FIX4ZtwCkSp4ouGk5ZGxK7LmrFzGtg6aCvNiUF+uhH06QnCvXUSfKawZ0t8w3mLDUoZnYaoMtAjIKUvV/D5H7ILcj05cxl2KvJiFNFfWwX4xZwi/caevrUuLIc/wkF9wF99w/zmfYAAAeBSURBVJhJ7mn1zfQpawZ3Pn1fsAhME2pxNXq8Lnt5XxEKvQsdcOHlVQXJ1HVTlqbk4SikiegYkPS4QCagusNfRqdDPoJD0RYGMSLxXgu4Mj86Vzfpk6dV1BSSvtCiF6VxfkskT0A2dXgWOSdTlb9QarTF5tgLRkHYiwotFYK9LIdoiTtZuEerdUcYLBnvOdPuUQxxckcUlVpt5O3HiJDfQviaiFV90nxausjG+oZSxQBLScAEsqILn4uS3OPEtgN2karUhCohWb5ikT0iRL2BWLVFVhcW18om0M0D9HSiyiddAdQqRrgvdEcZvCQtNR7FqyqygWWL6KDcI+EVfbTUOGmcARA05mRU2yWYsHSISxCTWWWJCigIfIvaI/QrtBybtKdPX2lIG0LWU84vW8kRsowstZFsfK2Il8haRmqTmAJS49E9OanzVEgLI4IKaD/INwJjYdiVCvhtNjUCESUsi3wTo/cxDIgPpnpMEgUghHog6vu74k4Q90cEFEULP1hRXAORGtWFTG0cvXSkCWQMStZiGuQkM5ED6pLXUqUm61zSaZP1iqwlZrlTtimKVNDxeTRgrxKNotvIxAv79hO3ICeL8KAoIpXAamGTplVZupKoUv5q6zlCeioW0sdb5NLx8tMO5+YoJGKBD8i6VOmTe3pRRKKDk9jrRndH3SRqQ3cEMcmXzNOiF6PcRdQStiJSiQi1eMcogpu8zkJz0ob0s2X3i9GtJQZcbF9AnsgHtHuJPXrpk4yLRkivGNvtUz5ljyTgA3b6nrVIwRjzMK2ZsDiA2x6KvuUx4mf6o2z/5guxR6apnFDvGDtkuu6ZfIueLhekjlgEAbiiMoKdGcXodME5Yzu2QwVb5EqfKbkoWYPPbRFGF/CzxCvbVIYPw0jD4nOs9TP6xFzFzFJkwnuiHB0g68PZD2s0NoL9H0YPJNqZQorW3NCHFodtlB5M2mAajET3p0kzlzuX600n4YMNtsNBlTPfYuocMk5cK6NP7iJnXl7TSI+vqDtk8NMoDvWfjdnQ9hXsIHsZmpfwmhEGUtIHx4EUCSJIaEupN3afI3oyVQpqygkloT+J3R7d88Bc3QcblEoyk2ckKIpZkVpKHBeHESZitDWTbUZRfpWcSRQnPstj2w6Qryrbt4H9nT5TrHhUgePgh3IHo9sRjVmL3FxY+hFQY17HB9OHb6aLqKgJRnEXJX8+6emwUJN7TOzFuwUWdBeTSmBQrWAYeWz5fao5+At5wHHww7iKUSVlt4SzJKjF/oXS95ytLHLFT7U5dVznt7SJVTrdf67irs2UB+9/Vkshy1iZIcsCD2Z6Du9wCil2ZRvGsDY05SSeSAgPRErvMNtaIzVAbQ+kszY0qixSk1DYmCyxHQJ7PXUCUYeOIcl7aoqJLo8ivEZ8L2Pb8HiHA5K9GYBUG1gcxI8gQEKPDJYhWGccTNssc0jjAgdG1AQSO+KNVLju0diJR9Qmx7A9jxJRiBXvKkh7Ra4b6zkNgPFDpkEeMxw1ShIwqiRaxDlFIR1lRS5wnUkOarxcKNXErw3R+L7UZJGFZuPU+fuJWJQI3dilEUNCfKLVkdiWNiY/uudcJs2ekMtRqiDM6FSjbaNZLroaayMT6i0oxt2I2FZ9cTwW5gUprsEQ4HtQw8F2qkLfKlIVJ1YeRF6ePFYUGMQVjI4ZPWqmhBgeGSIy5LsZxW3MYzFSJ5fvcJkOr4rG0snUQF7cDeIn1+qBArvhWqkBFlEXm3bND4ew99h4o4DBC3tFpJ0ONxdr7egT8hoZN6bDXnVICrp94r/xEvkWc1R77gRxjJ5IurBoP4oTGfUQHWKUDprNAtq4Yl8hbdjnkU8FYZSC5YnWKEpovEUOrDXv47KUnFzUSZITDxiMKDjHmzpNRwGXLYGNkUxd7PVk+pSRWqINi4tmv9ch9EqHcSzuJ3tDVRWa9aGRWjsVD9JeUnaI9t+S8Y4vwEhOkdNIzkx0Z5feUALog9lgQ6q1MvTpXC8gYc4+l1oVqw4lF2KktKCBjU9MdJCNjelBiTqRxC6xVZcN1WmviCXEqu8mxogxqaODUPe9mKSiS6emdDQ+6QoRoYHQ3M1OciWYFngpZggePmE/4kwMiZ04hU4xJDb2BB2qqX7cLTzwoSNdugqaRuyRF6VqwHo5ifGUJTs1JqSRXHrUH2dwxWozHkCsBYmgRXMFSPWjJ9ajaitXG0jraE6NNKARzU2IgO3AE+xEHYCnRFdnSXu5OkHkQu2P4I4djsSt5qNqwMLxVlFiJ3eNCDG2AzCiOAmkFyFo9BlIZgeZM4FEXE9L0IZUVRPvvV7th5zNTapo53mzQejLmcIv1T4N/J0+OaXaiV/rXNvV8bEiaPCM15jCg0WdLi/yd9BlhiS6dHaKusnXh3tVM/4ruuRQxyfT902ouA20xt7e0fVON8zUdoWoZWa1R1s6Rf0S153XQnOQbhhqoxQt+24Yr5axPNfx+VfOOG7oOslZTgNeJrtUy4YH4wnIkLtMzbeTPbJDLUi+3WeE2sCOwDaoUSOteS8rsTR4j6grLjzl616z8of8IX/IVyH/Hx10FaqkFjLiAAAAAElFTkSuQmCC", 12, 5)
  ];

  _map: EntryProduct[] = [
    { key: this.products[0].title, value: this.products[0] },
    { key: this.products[1].title, value: this.products[1] },
    { key: this.products[2].title, value: this.products[2] },
    { key: this.products[3].title, value: this.products[3] }
  ];


  _map2 = {
    [this.products[0].title]: this.products[0],
    [this.products[1].title]: this.products[1],
    [this.products[2].title]: this.products[2],
    [this.products[3].title]: this.products[3]
  }

  public get products(): Product[] {
    return this._products;
  }

  public isTheLast(produitTitle: string): boolean {
    //this._map.find((e) => e.key === produitTitle).value.stock;
    return this._map2[produitTitle].stock === 1;
  }

  public isAvailable(produitTitle: string): boolean {
    return this._map2[produitTitle].stock > 0;
  }

  public decreaseStock(produitTitle: string): void {
    this._map2[produitTitle].stock--;
  }

}
